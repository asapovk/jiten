import { Word } from '../../../generated/prisma-schema.d'
import { prisma } from '../../../generated'
import { WordSingleQueryArgs } from '../../../generated/schema'
/**
 * @resolver
 */
export default async (req: any, args: WordSingleQueryArgs, { db }, info) => {
    console.log('SINGLE QUERY CALL!')
    try {

        const query = {
            writing: args.input.writing
        }

        const words: Word[] | null = await prisma.words({
            where: query
        }).$fragment(`
        fragment WordWith on Words {
            translation
            writing
            hiragana
            romaji
            imageUrl
            usage {
                question
                answer
            }
          }
        `)
        console.log(words)
        return words ? words[0] : null
    } catch (error) {
        throw error;
    }
}