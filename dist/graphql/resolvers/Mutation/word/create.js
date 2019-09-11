"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generated_1 = require("../../../../generated");
/**
 * @resolver
 */
exports.default = async (_, args) => {
    //const translationSet = args.input.translation
    //const translationSetModified = translationSet.length === 1 ? translationSet[0] : translationSet
    try {
        //Check if already exist
        const existWords = await generated_1.prisma.words({
            where: {
                writing: args.input.writing
            }
        });
        var wordId = null;
        if (Array.isArray(existWords) && existWords.length !== 0) {
            wordId = existWords[0].id;
            const updateddWord = await generated_1.prisma.updateWord({
                data: {
                    writing: args.input.writing,
                    translation: {
                        set: args.input.translation
                    },
                    romaji: args.input.romaji,
                    hiragana: args.input.hiragana,
                    usage: {
                        create: args.input.usage
                    },
                    usageMeaning: {
                        create: args.input.usageMeaning
                    },
                    usageDifference: {
                        create: args.input.usageDifference
                    },
                    usageWatsay: {
                        create: args.input.usageWatsay
                    },
                    usageOther: {
                        create: args.input.usageOther
                    }
                }, where: {
                    id: wordId
                }
            });
            console.log('UPDATED_WORD');
            console.log(updateddWord);
            return updateddWord;
        }
        else {
            const createddWord = await generated_1.prisma.createWord({
                writing: args.input.writing,
                translation: {
                    set: args.input.translation
                },
                romaji: args.input.romaji,
                hiragana: args.input.hiragana,
                usage: {
                    create: args.input.usage
                },
                usageMeaning: {
                    create: args.input.usageMeaning
                },
                usageDifference: {
                    create: args.input.usageDifference
                },
                usageWatsay: {
                    create: args.input.usageWatsay
                },
                usageOther: {
                    create: args.input.usageOther
                }
            });
            console.log('CREATED_WORD');
            console.log(createddWord);
            return createddWord;
        }
    }
    catch (error) {
        console.log(error.message);
        throw (error);
    }
};
//# sourceMappingURL=create.js.map