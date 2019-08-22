import * as Query from "./Query";
import * as Mutation from "./Mutation";
import { prisma } from '../../generated'
/**
 * any cause ApolloServer request little bit
 * different object of resolvers
 */
export default {
    Query,
    Mutation
} as any