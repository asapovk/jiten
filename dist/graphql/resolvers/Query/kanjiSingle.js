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
        const kanjis = await generated_1.prisma.kanjis({
            where: query,
            first: 30
        }).$fragment(`
        fragment KanjiWith on Kanji {
            meaning {
                meaning
            }
            writing
            on {
                on
            }
            kun {
                kun
            }
            jlpt
            imageUrl
          }
        `);
        const usageFirstWords = await generated_1.prisma.words({
            where: {
                writing_starts_with: args.input.writing
            }
        });
        const usageLastWords = await generated_1.prisma.words({
            where: {
                writing_ends_with: args.input.writing
            }
        });
        console.log('KANJIS');
        console.log(kanjis);
        const transformedKanji = kanjis.map(item => {
            return {
                ...item,
                kun: item.kun.map(i => { return i.kun; }),
                on: item.on.map(i => { return i.on; }),
                meaning: item.meaning.map(i => { return i.meaning; }),
                usageFirst: usageFirstWords,
                usageLast: usageLastWords
            };
        });
        console.log(transformedKanji);
        return transformedKanji ? transformedKanji[0] : null;
    }
    catch (error) {
        throw error;
    }
};
//# sourceMappingURL=kanjiSingle.js.map