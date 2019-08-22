import fetchWords from '../../../graphql/data/fetchWords';
import { Word, Query } from '../../../generated/prisma-schema.d'
import { prisma } from '../../../generated'


/**
 * @resolver
 */
export default async (req: any, args, { db }, info): Promise<Word[]> => {
    try {
        //const words: Word[] = db.query.words()
        const words: Word[] | null = await prisma.words()
        return words
    } catch (error) {
        throw error;
    }
}