
import updateWordById from "../../../data/updateWord"

/**
 * @resolver
 */
export default async (args) => {
    try {

        const res = await updateWordById({
            userId: args.input.wordId,
            writing: args.input.writing,
            translation: args.input.translation
        });
        return res

    } catch (error) {
        throw error;
    }
}