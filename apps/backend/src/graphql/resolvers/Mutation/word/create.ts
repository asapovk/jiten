import { Word } from '../../../../generated/prisma-schema.d'
import { prisma } from '../../../../generated'
import { CreateWordMutationArgs } from '../../../../generated/schema'

/**
 * @resolver
 */
export default async (_, args: CreateWordMutationArgs) => {

    //const translationSet = args.input.translation
    //const translationSetModified = translationSet.length === 1 ? translationSet[0] : translationSet


    try {
        const createddWord: Word = await prisma.createWord({
            writing: args.input.writing,
            translation: {
                set: args.input.translation
            },
            romaji: args.input.romaji,
            hiragana: args.input.hiragana,
            usage: {
                create: args.input.usage
            }

        })

        console.log('CREATED_WORD')
        console.log(createddWord)
        return createddWord
    }
    catch (error) {
        console.log(error.message)
        throw (error)
    }

}