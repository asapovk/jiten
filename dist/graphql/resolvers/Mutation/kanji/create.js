"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generated_1 = require("../../../../generated");
/**
 * @resolver
 */
exports.default = async (_, args) => {
    try {
        //Check if already exist
        const existKanji = await generated_1.prisma.kanjis({
            where: {
                writing: args.input.writing
            }
        });
        var kanjiId = null;
        if (existKanji.length !== 0) {
            kanjiId = existKanji[0].id;
            if (!kanjiId) {
                return null;
            }
        }
        const onRomajiArray = args.input.onRomaji.map(item => {
            return {
                onRomaji: item
            };
        });
        const kunRomajiArray = args.input.kunRomaji.map(item => {
            return {
                kunRomaji: item
            };
        });
        const onArray = args.input.on.map(item => {
            return {
                on: item
            };
        });
        const kunArray = args.input.kun.map(item => {
            return {
                kun: item
            };
        });
        const meaningArray = args.input.meaning.map(item => {
            return {
                meaning: item
            };
        });
        const createddKanji = await generated_1.prisma.updateKanji({
            data: {
                writing: args.input.writing,
                meaning: {
                    create: meaningArray
                },
                on: {
                    create: onArray
                },
                kun: {
                    create: kunArray
                },
                onRomaji: {
                    create: onRomajiArray
                },
                kunRomaji: {
                    create: kunRomajiArray
                },
                imageUrl: args.input.imageUrl
            }, where: { id: kanjiId }
        });
        console.log('CREATED_KANJi');
        console.log(createddKanji);
        return createddKanji;
    }
    catch (error) {
        console.log(error.message);
        throw (error);
    }
};
//# sourceMappingURL=create.js.map