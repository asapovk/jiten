import { Kanji } from '../../../../generated/prisma-schema.d'
import { prisma } from '../../../../generated'
import { CreateKanjiMutationArgs } from '../../../../generated/schema'



/**
 * @resolver
 */
export default async (_, args: CreateKanjiMutationArgs) => {


    try {

        //Check if already exist
        const existKanji: Kanji[] | null = await prisma.kanjis({
            where: {
                writing: args.input.writing
            }
        })

        if (existKanji.length !== 0) {
            return existKanji[0]
        }



        const createddKanji: Kanji = await prisma.createKanji({
            writing: args.input.writing,
            meaning: {
                set: args.input.meaning
            },
            on: {
                set: args.input.on
            },
            kun: {
                set: args.input.kun
            },
            onRomaji: {
                set: args.input.onRomaji
            },
            kunRomaji: {
                set: args.input.kunRomaji
            },
            imageUrl: args.input.imageUrl
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