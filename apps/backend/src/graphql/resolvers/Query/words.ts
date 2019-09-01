import fetchWords from '../../../graphql/data/fetchWords';
import { Word, Query } from '../../../generated/prisma-schema.d'
import { prisma } from '../../../generated'
import { WordsQueryArgs } from '../../../generated/schema'

/**
 * @resolver
 */
export default async (req: any, args: WordsQueryArgs, { db }, info): Promise<Word[]> => {

    const searchType = args.input ? args.input.searchType : 'writing' as any
    const searchInput = args.input ? args.input.searchInput : ''

    try {

        const words: Word[] | null = await prisma.words({
            where: {
                [searchType]: searchInput
            }
        })
        return words
    } catch (error) {
        throw error;
    }
}