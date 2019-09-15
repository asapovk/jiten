"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generated_1 = require("../../../../generated");
/**
 * @resolver
 */
exports.default = async (_, args) => {
    try {
        const res = await generated_1.prisma.updateWord({
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
    }
    catch (error) {
        throw error;
    }
};
//# sourceMappingURL=updateAPI.js.map