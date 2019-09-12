"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generated_1 = require("../../../generated");
/**
 * @resolver
 */
exports.default = async (req, args, { db }, info) => {
    const searchInput = args.input ? args.input.writing : [];
    try {
        if (searchInput.length > 0) {
            const words = await generated_1.prisma.words({
                where: {
                    writing_in: searchInput
                },
                first: 30
            });
            return words;
        }
        return [];
    }
    catch (error) {
        throw error;
    }
};
//# sourceMappingURL=wordsAPI.js.map