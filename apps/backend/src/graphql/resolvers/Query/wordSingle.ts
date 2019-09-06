import { Word } from '../../../generated/prisma-schema.d'
import { prisma } from '../../../generated'
import { WordSingleQueryArgs } from '../../../generated/schema'
/**
 * @resolver
 */
export default async (req: any, args: WordSingleQueryArgs, { db }, info) => {
    console.log('SINGLE QUERY CALL!')
    try {

        const query = {
            writing: args.input.writing
        }

        const words: Word[] | null = await prisma.words({
            where: query,
            first: 30
        }).$fragment(`
        fragment WordWith on Words {
            translation
            writing
            hiragana
            romaji
            imageUrl
            usage {
                question
                answer
            }
            usageMeaning {
                question
                answer
            }
            usageDifference {
                question
                answer
            }
            usageWatsay {
                question
                answer
            }
            usageOther {
                question
                answer
            }
          }
        `)
        // TO EDIT!!!   
        const kanjisList = args.input.writing.split('')
        let kanjisOfWord: any[] = []
        let kanjiOfWord;
        for (var val of kanjisList) {
            kanjiOfWord = await prisma.kanjis({
                where: {
                    writing: val
                }
            })
            if (Array.isArray(kanjiOfWord) && kanjiOfWord.length > 0) {
                kanjisOfWord.push(kanjiOfWord[0])
            }
        }
        const resWord = words ? words[0] : null
        if (resWord) {
            return {
                ...resWord,
                kanji: kanjisOfWord
            }
        }
        return null
    } catch (error) {
        throw error;
    }
}