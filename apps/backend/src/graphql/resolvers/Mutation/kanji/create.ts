import { Kanji } from '../../../../generated/prisma-schema.d'
import { prisma } from '../../../../generated'
import { CreateKanjiMutationArgs } from '../../../../generated/schema'



/**
 * @resolver
 */
export default async (args: CreateKanjiMutationArgs) => {


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
            on: args.input.on as any,
            kun: args.input.kun as any,
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