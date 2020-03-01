import { Request, Response } from 'express'
import { prisma } from '../../generated/index'


const kanji = async (req: Request, res: Response) => {
    const writing = req.body.writing
    res.type('json')
    const kanji = await prisma.kanjis({
        where: {
            writing_in: writing
        }
    })
    res.send(kanji)
}

export default kanji
