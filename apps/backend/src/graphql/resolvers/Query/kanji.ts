import { KanjisQueryArgs } from '../../../generated/schema'
import { Kanji } from '../../../generated/prisma-schema.d'
import { prisma } from '../../../generated'

/**
 * @resolver
 */
export default async (req: any, args: KanjisQueryArgs, { db }, info) => {

    const searchType = args.input ? args.input.searchType : 'writing' as any
    const searchInput = args.input ? args.input.searchInput : ''

    try {
        const kanji: Kanji[] | null = await prisma.kanjis(
            {
                where: {
                    [searchType]: searchInput
                }
            }
        )
        console.log(kanji)
        return kanji
    } catch (error) {
        throw error;
    }
}