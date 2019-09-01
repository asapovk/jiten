import { KanjisQueryArgs } from '../../../generated/schema'
import { Kanji } from '../../../generated/prisma-schema.d'
import { prisma } from '../../../generated'

/**
 * @resolver
 */
export default async (req: any, args: KanjisQueryArgs, { db }, info) => {


    try {
        const kanji: Kanji | null = await prisma.kanjis(
            {
                where: {
                    writing: args.input ? args.input.searchInput : ''
                }
            }
        ).$fragment(`
        fragment KanjiWith on Kanji {
            meaning
            writing
            on
            kun
            jlpt
            imageUrl
            usageFirst {
                writing
                translation
            }
            usageLast {
                writing
                translation
            }
            phonetics {
                writing
                meaning
                on
                kun
            }
          }
        `)
        console.log(kanji)
        return kanji
    } catch (error) {
        throw error;
    }
}