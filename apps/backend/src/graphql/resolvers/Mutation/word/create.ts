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



        //Check if already exist
        const existWords: Word[] | null = await prisma.words({
            where: {
                writing: args.input.writing
            }
        })

        var wordId: any = null

        if (Array.isArray(existWords) && existWords.length !== 0) {
            wordId = existWords[0].id


            const updateddWord: Word = await prisma.updateWord({
                data: {
                    writing: args.input.writing,
                    translation: {
                        set: args.input.translation
                    },
                    romaji: args.input.romaji,
                    hiragana: args.input.hiragana,
                    usage: {
                        create: args.input.usage as any
                    },
                    usageMeaning: {
                        create: args.input.usageMeaning as any
                    },
                    usageDifference: {
                        create: args.input.usageDifference as any
                    },
                    usageWatsay: {
                        create: args.input.usageWatsay as any
                    },
                    usageOther: {
                        create: args.input.usageOther as any
                    }

                }, where: {
                    id: wordId
                }
            })
            console.log('UPDATED_WORD')
            console.log(updateddWord)
            return updateddWord
        }
        else {
            const createddWord: Word = await prisma.createWord(
                {
                    writing: args.input.writing,
                    translation: {
                        set: args.input.translation
                    },
                    romaji: args.input.romaji,
                    hiragana: args.input.hiragana,
                    usage: {
                        create: args.input.usage as any
                    },
                    usageMeaning: {
                        create: args.input.usageMeaning as any
                    },
                    usageDifference: {
                        create: args.input.usageDifference as any
                    },
                    usageWatsay: {
                        create: args.input.usageWatsay as any
                    },
                    usageOther: {
                        create: args.input.usageOther as any
                    }

                })
            console.log('CREATED_WORD')
            console.log(createddWord)
            return createddWord
        }

    }
    catch (error) {
        console.log(error.message)
        throw (error)
    }

}