"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generated_1 = require("../../../generated");
/**
 * @resolver
 */
exports.default = async (req, args, { db }, info) => {
    const searchType = args.input ? args.input.searchType : 'writing';
    const searchInput = args.input ? args.input.searchInput : '';
    const objectSearchTypes = ['onRomaji', 'kunRomaji', 'meaning', 'on', 'kun'];
    var query = {};
    if (objectSearchTypes.includes(searchType)) {
        query = {
            [searchType + '_some']: {
                [searchType]: searchInput
            }
        };
    }
    else {
        query = {
            [searchType]: searchInput
        };
    }
    try {
        const kanji = await generated_1.prisma.kanjis({
            where: query,
            first: 30
        }).$fragment(`
        fragment KanjiWith on Kanjis {
        writing
        on {
            on
        }
        onRomaji {
            onRomaji
        }
        kun {
            kun
        }
        kunRomaji {
            kunRomaji
        }
        meaning {
            meaning
        }
        }
        `);
        const transformedKanji = kanji.map(item => {
            return {
                ...item,
                kun: item.kun.map(i => { return i.kun; }),
                on: item.on.map(i => { return i.on; }),
                kunRomaji: item.kunRomaji.map(i => { return i.kunRomaji; }),
                onRomaji: item.onRomaji.map(i => { return i.onRomaji; }),
                meaning: item.meaning.map(i => { return i.meaning; })
            };
        });
        console.log('KANJI');
        console.log(transformedKanji);
        return transformedKanji;
    }
    catch (error) {
        throw error;
    }
};
//# sourceMappingURL=kanji.js.map