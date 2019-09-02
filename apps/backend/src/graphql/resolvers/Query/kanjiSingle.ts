


import { Kanji } from '../../../generated/prisma-schema.d'
import { prisma } from '../../../generated'
import { KanjiSingleQueryArgs } from '../../../generated/schema'
/**
 * @resolver
 */
export default async (req: any, args: KanjiSingleQueryArgs, { db }, info) => {
    console.log('SINGLE QUERY CALL!')
    try {

        const query = {
            writing: args.input.writing
        }

        const kanjis: Kanji[] | null = await prisma.kanjis({
            where: query,
            first: 30
        }).$fragment(`
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
        console.log(kanjis)
        return kanjis ? kanjis[0] : null
    } catch (error) {
        throw error;
    }
}