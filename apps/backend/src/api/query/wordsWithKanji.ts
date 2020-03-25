import { Request, Response } from 'express'
import { prisma, Kanji, Word } from '../../generated/index'
import _ from 'lodash'



interface GetWordsWithKanjiInput {
    writing: string
}
interface GetWordsWithKanji {
    questionWord: Word,
    usageFirstWords: Word[],
    usageLastWords: Word[]
}

interface GetQuizQuestionsInput {
    writings: Array<string>
    limit: number
    type: "firstKanji" | "lastKanji" | "both"
}

interface QuizQuestions {
    quizQuestions: Array<{
        question: Word,
        answersFirst: Word[],
        answersLast: Word[]
    }>
}

class Words {

    private getWordsWithKanji = async (args: GetWordsWithKanjiInput)
        : Promise<GetWordsWithKanji> => {
        const kanjisList = args.writing.split('')
        let kanjisOfWord: Kanji[] = []
        //let kanjiOfWord;
        for (var val of kanjisList) {
            let kanjiOfWord = await prisma.kanjis({
                where: {
                    writing: val
                }
            })
            if (Array.isArray(kanjiOfWord) && kanjiOfWord.length > 0) {
                kanjisOfWord.push(kanjiOfWord[0])
            }
        }

        const firstKanjiWriting = Array.isArray(kanjisOfWord) && kanjisOfWord.length > 0 ?
            kanjisOfWord[0].writing
            : null

        const lastKanjiWriting = Array.isArray(kanjisOfWord) && kanjisOfWord.length > 0 ?
            _.last(kanjisOfWord)!.writing
            : null

        const questionWord = await prisma.words({
            where: {
                writing: args.writing
            }
        })

        const usageFirstWords = await prisma.words({
            where: {
                writing_starts_with: firstKanjiWriting
            }
        })
        const usageLastWords = await prisma.words({
            where: {
                writing_ends_with: lastKanjiWriting
            }
        })
        return {
            questionWord: questionWord[0],
            usageFirstWords,
            usageLastWords
        }


    }


    public makeQuizQuestions = async (args: GetQuizQuestionsInput)
        : Promise<QuizQuestions> => {
        let questions: any[] = []
        for (let writing of args.writings) {
            let result = await this.getWordsWithKanji({
                writing
            })

            let firstRandom = result.usageFirstWords[Math.floor(Math.random() * result.usageFirstWords.length)]
            let lastRandom = result.usageLastWords[Math.floor(Math.random() * result.usageLastWords.length)]


            let indexesFirst: number[] = []
            let indexesLast: number[] = []

            let valuesFirst: any[] = []
            let valuesLast: any[] = []
            const chooseLimit: number = args.limit

            for (let counter = 0; counter < chooseLimit; counter++) {
                let randomIndexFirst = Math.floor(Math.random() * result.usageFirstWords.length)
                if (!indexesFirst.includes(randomIndexFirst)) {
                    indexesFirst.push(randomIndexFirst)
                    valuesFirst.push(result.usageFirstWords[randomIndexFirst])
                }
                let randomIndexLast = Math.floor(Math.random() * result.usageLastWords.length)
                if (!indexesLast.includes(randomIndexLast)) {
                    indexesLast.push(randomIndexLast)
                    valuesLast.push(result.usageLastWords[randomIndexLast])
                }
            }
            questions.push({
                questions: result.questionWord,
                answersFirst: valuesFirst,
                answersLast: valuesLast
            })
        }
        return {
            quizQuestions: questions
        }
    }


    public wordsWithKanji = async (req: Request, res: Response) => {
        const writings = req.body.writings
        const type = req.body.type
        const limit = req.body.limit
        const numberOfAnswers = req.body.numberOfAnswers

        res.type('json')

        const result = await this.makeQuizQuestions({
            writings,
            type,
            limit
        })
        res.send(result)
    }

}
export default new Words()