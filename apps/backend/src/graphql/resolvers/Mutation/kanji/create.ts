import { Kanji } from '../../../../generated/prisma-schema.d'
import { prisma } from '../../../../generated'
import { CreateKanjiMutationArgs } from '../../../../generated/schema'



/**
 * @resolver
 */
export default async (_, args: CreateKanjiMutationArgs) => {


    try {

        //Check if already exist
        const existKanji = await prisma.kanjis({
            where: {
                writing: args.input.writing
            }
        })
        var kanjiId: any = null
        if (existKanji.length !== 0) {
            kanjiId = existKanji[0].id
            if (!kanjiId) {
                return null
            }
        }


        const onRomajiArray = args.input.onRomaji.map(item => {
            return {
                onRomaji: item
            }
        })
        const kunRomajiArray = args.input.kunRomaji.map(item => {
            return {
                kunRomaji: item
            }
        })
        const onArray = args.input.on.map(item => {
            return {
                on: item
            }
        })
        const kunArray = args.input.kun.map(item => {
            return {
                kun: item
            }
        })
        const meaningArray = args.input.meaning.map(item => {
            return {
                meaning: item
            }
        })

        const createddKanji = await prisma.updateKanji({
            data: {
                writing: args.input.writing,
                meaning: {
                    create: meaningArray
                },
                on: {
                    create: onArray
                },
                kun: {
                    create: kunArray
                },
                onRomaji: {
                    create: onRomajiArray
                },
                kunRomaji: {
                    create: kunRomajiArray
                },
                imageUrl: args.input.imageUrl
            }, where: { id: kanjiId }
        })

        console.log('CREATED_KANJi')
        console.log(createddKanji)
        return createddKanji
    }
    catch (error) {
        console.log(error.message)
        throw (error)
    }
}