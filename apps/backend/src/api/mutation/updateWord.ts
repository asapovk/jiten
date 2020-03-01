import { Request, Response } from 'express'
import { prisma } from '../../generated/index'


const updateWord = async (req: Request, res: Response) => {
    const writing = req.body.writing

    const translation = req.body.translation ? req.body.translation : ''
    const author = req.body.author ? req.body.author : ''
    const origin = req.body.origin ? req.body.origin : ''
    const usage = req.body.usage ? req.body.usage : ''
    const time = Date.now().toString()

    const existWords = await prisma.words({
        where: {
            writing: writing
        }
    })

    var wordId: any = null

    if (Array.isArray(existWords) && existWords.length !== 0) {
        wordId = existWords[0].id

        const updatedWord = await prisma.updateWord({
            where: {
                id: wordId
            },
            data: {
                translation: {
                    set: [translation, ...existWords[0].translation]
                },
                updateHistory: {
                    create: {
                        origin,
                        usage,
                        newTranslation: translation,
                        time,
                        author
                    }
                }
            }
        });
        res.send(updatedWord)
    }
    res.send(null)
}

export default updateWord