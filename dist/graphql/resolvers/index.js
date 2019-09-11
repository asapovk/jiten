"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Query = __importStar(require("./Query"));
const Mutation = __importStar(require("./Mutation"));
/**
 * any cause ApolloServer request little bit
 * different object of resolvers
 */
exports.default = {
    Query,
    Mutation
};
//# sourceMappingURL=index.js.map