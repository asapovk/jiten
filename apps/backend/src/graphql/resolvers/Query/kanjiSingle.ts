


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

        const kanjis: any = await prisma.kanjis({
            where: query,
            first: 30
        }).$fragment(`
        fragment KanjiWith on Kanji {
            meaning {
                meaning
            }
            writing
            on {
                on
            }
            kun {
                kun
            }
            jlpt
            imageUrl
          }
        `)
        console.log('KANJIS')
        console.log(kanjis)
        const transformedKanji = kanjis.map(item => {
            return {
                ...item,
                kun: item.kun.map(i => { return i.kun }),
                on: item.on.map(i => { return i.on }),
                meaning: item.meaning.map(i => { return i.meaning })
            }
        })

        console.log(transformedKanji)
        return transformedKanji ? transformedKanji[0] : null
    } catch (error) {
        throw error;
    }
}