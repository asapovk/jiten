import fetchWords from '../../../graphql/data/fetchWords';
import { Word, Query } from '../../../generated/prisma-schema.d'


/**
 * @resolver
 */
export default async (req: any, args, { db }, info): Promise<Word[]> => {
    try {
        const words: Word[] = db.query.words()
        return words
    } catch (error) {
        throw error;
    }
}