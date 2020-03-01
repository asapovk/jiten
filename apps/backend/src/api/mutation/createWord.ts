import { Request, Response } from 'express'
import { prisma } from '../../generated/index'


const createWord = async (req: Request, res: Response) => {
    const writing = req.body.writing
    const translation = req.body.translation ? req.body.translation : ''
    const hiragana = req.body.hiragana ? req.body.hiragana : ''
    const romaji = req.body.romaji ? req.body.romaji : ''

    const author = req.body.author ? req.body.author : ''
    const origin = req.body.origin ? req.body.origin : ''
    const usage = req.body.usage ? req.body.usage : ''
    const time = Date.now().toString()

    const createdWord = await prisma.createWord(
        {
            writing: writing,
            hiragana: hiragana,
            romaji: romaji,
            translation: {
                set: [translation]
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
        });
    res.send(createdWord)
}

export default createWord