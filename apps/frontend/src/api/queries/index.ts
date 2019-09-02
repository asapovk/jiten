import { DocumentNode } from "graphql/language";

interface Queries {
    [key: string]: DocumentNode
}

const queries: Queries = {
    /* Common Queries */

    /* User Queries */
    words: require("./words.gql"),
    kanjis: require("./kanji.gql"),
    kanjiSingle: require("./kanjiSingle"),
    wordSingle: require("./wordSingle")

}

export default queries;