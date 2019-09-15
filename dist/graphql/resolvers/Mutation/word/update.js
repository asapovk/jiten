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
                id: args.input.id
            },
            data: {
                translation: {
                    set: ['test']
                }
            }
        });
        return res;
    }
    catch (error) {
        throw error;
    }
};
//# sourceMappingURL=update.js.map