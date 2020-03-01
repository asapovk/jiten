import { Request, Response } from 'express'
import { prisma } from '../../generated/index'


const word = async (req: Request, res: Response) => {
    const writing = req.body.writing
    res.type('json')
    const words = await prisma.words({
        where: {
            writing_in: writing
        }
    })
    res.send(words)
}

export default word