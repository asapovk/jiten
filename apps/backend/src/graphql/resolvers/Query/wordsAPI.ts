import fetchWords from '../../../graphql/data/fetchWords';
import { Word, Query } from '../../../generated/prisma-schema.d'
import { prisma } from '../../../generated'
import { WordsApiQueryArgs } from '../../../generated/schema'

/**
 * @resolver
 */
export default async (req: any, args: WordsApiQueryArgs, { db }, info): Promise<Word[]> => {

    const searchInput = args.input ? args.input.writing : []

    try {
        if (searchInput.length > 0) {
            const words: Word[] | null = await prisma.words({
                where: {
                    writing_in: searchInput
                },
                first: 30
            })
            return words
        }
        return []
    } catch (error) {
        throw error;
    }
}