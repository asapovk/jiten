import { KanjisQueryArgs } from '../../../generated/schema'
import { Kanji } from '../../../generated/index'
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
        const kanji: any = await prisma.kanjis(
            {
                where: query
                ,
                first: 30

            }
        ).$fragment(`
        fragment KanjiWith on Kanjis {
        writing
        on {
            on
        }
        onRomaji {
            onRomaji
        }
        kun {
            kun
        }
        kunRomaji {
            kunRomaji
        }
        meaning {
            meaning
        }
        }
        `)

        const transformedKanji = kanji.map(item => {
            return {
                ...item,
                kun: item.kun.map(i => { return i.kun }),
                on: item.on.map(i => { return i.on }),
                kunRomaji: item.kunRomaji.map(i => { return i.kunRomaji }),
                onRomaji: item.onRomaji.map(i => { return i.onRomaji }),
                meaning: item.meaning.map(i => { return i.meaning })
            }
        })
        console.log('KANJI')
        console.log(transformedKanji)
        return transformedKanji
    } catch (error) {
        throw error;
    }
}