
import { Kanji } from '../../../generated/prisma-schema.d'
import { prisma } from '../../../generated'

/**
 * @resolver
 */
export default async (req: any, args, { db }, info) => {
    try {
        const kanji: Kanji | null = await prisma.kanjis().$fragment(`
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