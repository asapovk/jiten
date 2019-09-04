import { KanjisQueryArgs } from '../../../generated/schema'
import { Kanji } from '../../../generated/prisma-schema.d'
import { prisma } from '../../../generated'

/**
 * @resolver
 */
export default async (req: any, args: KanjisQueryArgs, { db }, info) => {

    const searchType = args.input ? args.input.searchType : 'writing' as any
    const searchInput = args.input ? args.input.searchInput : ''

    const objectSearchTypes = ['onRomaji', 'kunRomaji', 'meaning', 'on', 'kun']

    var query = {}
    if (objectSearchTypes.includes(searchType)) {
        query = {
            [searchType + '_some']: {
                [searchType]: searchInput
            }
        }
    }
    else {
        query = {
            [searchType]: searchInput
        }
    }


    try {
        const kanji = await prisma.kanjis(
            {
                where: query
                ,
                first: 30

            }
        )
        console.log(kanji)
        return kanji
    } catch (error) {
        throw error;
    }
}