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
                id: 'test'
            },
            data: {
                writing: 'test',
                romaji: 'test',
                hiragana: 'test',
                updateHistory: {
                    create: {
                        origin: 'test',
                        usage: 'test',
                        newTranslation: 'test',
                        time: 'test',
                        author: 'test'
                    }
                }
            }
        });

    } catch (error) {
        throw error;
    }
}