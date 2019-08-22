import createWord from "../../../data/createWord";


/**
 * @resolver
 */
export default async (args) => {

    try {
        return await createWord(
            {
                writing: args.input.writing,
                translation: args.input.translation
            }
        );

    } catch (error) {
        throw error;
    }
}