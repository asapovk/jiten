"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const updateWord_1 = __importDefault(require("../../../data/updateWord"));
/**
 * @resolver
 */
exports.default = async (args) => {
    try {
        const res = await updateWord_1.default({
            userId: args.input.wordId,
            writing: args.input.writing,
            translation: args.input.translation
        });
        return res;
    }
    catch (error) {
        throw error;
    }
};
//# sourceMappingURL=update.js.map