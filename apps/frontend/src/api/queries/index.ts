import { DocumentNode } from "graphql/language";

interface Queries {
    [key: string]: DocumentNode
}

const queries: Queries = {
    /* Common Queries */

    /* User Queries */
    words: require("./words.gql"),

}

export default queries;