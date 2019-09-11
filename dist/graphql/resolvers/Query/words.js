"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generated_1 = require("../../../generated");
/**
 * @resolver
 */
exports.default = async (req, args, { db }, info) => {
    const searchType = args.input ? args.input.searchType : 'writing';
    const searchInput = args.input ? args.input.searchInput : '';
    try {
        const words = await generated_1.prisma.words({
            where: {
                [searchType]: searchInput
            },
            first: 30
        });
        return words;
    }
    catch (error) {
        throw error;
    }
};
//# sourceMappingURL=words.js.map