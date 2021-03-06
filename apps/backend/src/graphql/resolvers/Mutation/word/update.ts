import { Word } from '../../../../generated/prisma-schema.d'
import { prisma } from '../../../../generated'
import { UpdateWordMutationArgs } from '../../../../generated/schema'

/**
 * @resolver
 */
export default async (_, args: UpdateWordMutationArgs) => {
    try {

        const res: Word = await prisma.updateWord({
            where: {
                id: args.input.id
            },
            data: {
                translation: {
                    set: ['test']
                }
            }
        });
        return res

    } catch (error) {
        throw error;
    }
}