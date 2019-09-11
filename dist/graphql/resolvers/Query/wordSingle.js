"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generated_1 = require("../../../generated");
/**
 * @resolver
 */
exports.default = async (req, args, { db }, info) => {
    console.log('SINGLE QUERY CALL!');
    try {
        const query = {
            writing: args.input.writing
        };
        const words = await generated_1.prisma.words({
            where: query,
            first: 30
        }).$fragment(`
        fragment WordWith on Words {
            translation
            writing
            hiragana
            romaji
            imageUrl
            usage {
                question
                answer
            }
            usageMeaning {
                question
                answer
            }
            usageDifference {
                question
                answer
            }
            usageWatsay {
                question
                answer
            }
            usageOther {
                question
                answer
            }
          }
        `);
        // TO EDIT!!!   
        const kanjisList = args.input.writing.split('');
        let kanjisOfWord = [];
        let kanjiOfWord;
        for (var val of kanjisList) {
            kanjiOfWord = await generated_1.prisma.kanjis({
                where: {
                    writing: val
                }
            });
            if (Array.isArray(kanjiOfWord) && kanjiOfWord.length > 0) {
                kanjisOfWord.push(kanjiOfWord[0]);
            }
        }
        const resWord = words ? words[0] : null;
        if (resWord) {
            return {
                ...resWord,
                kanji: kanjisOfWord
            };
        }
        return null;
    }
    catch (error) {
        throw error;
    }
};
//# sourceMappingURL=wordSingle.js.map