import deleteWordById from "../../../data/deleteWord";

/**
 * @resolver
 */
export default async (args) => {
    try {

        const res = await deleteWordById({
            wordId: args.input.wordId,
        });

        return res;

    } catch (error) {
        throw error;
    }
}