"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const deleteWord_1 = __importDefault(require("../../../data/deleteWord"));
/**
 * @resolver
 */
exports.default = async (args) => {
    try {
        const res = await deleteWord_1.default({
            wordId: args.input.wordId,
        });
        return res;
    }
    catch (error) {
        throw error;
    }
};
//# sourceMappingURL=delete.js.map