"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
let envPath = "";
for (let i = 0; i < process.argv.length; i++) {
    if (process.argv[i] === "-env") {
        envPath = path_1.default.resolve(process.cwd(), process.argv[i + 1]);
    }
}
if (!envPath) {
    console.error('-env should be a path for config file');
    process.exit(0);
}
if (!fs_1.default.existsSync(envPath)) {
    console.error('-env file not exist at path ' + envPath);
    process.exit(0);
}
dotenv_1.default.config({
    path: envPath,
    debug: process.env.ENV === "debug"
});
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const body_parser_1 = __importDefault(require("body-parser"));
const apollo_server_express_1 = require("apollo-server-express");
const prisma_binding_1 = require("prisma-binding");
const graphql_tools_1 = require("graphql-tools");
const graphql_import_1 = require("graphql-import");
const resolvers_1 = __importDefault(require("./graphql/resolvers"));
const index_1 = require("./generated/index");
const app = express_1.default();
const port = process.env.PORT || 4000;
const typeDefs = graphql_import_1.importSchema(path_1.default.join(__dirname, "graphql", "schema.graphql"));
const prismaTypeDefs = graphql_import_1.importSchema(path_1.default.join(__dirname, "generated", "prisma.graphql"));
app.use(body_parser_1.default.json({ limit: '50mb' }));
app.use(body_parser_1.default.urlencoded({ extended: true, limit: '50mb' }));
app.use(compression_1.default());
const apolloServer = new apollo_server_express_1.ApolloServer({
    schema: graphql_tools_1.makeExecutableSchema({
        typeDefs,
        resolvers: resolvers_1.default
    }),
    context: req => ({
        ...req,
        db: new prisma_binding_1.Prisma({
            typeDefs: prismaTypeDefs,
            endpoint: 'http://localhost:4466',
            secret: '',
            debug: true,
        }),
    }),
    /**
     * GraphQL error handling converts new Error(code)
     * to errorDefinitions object
     * ignore formatted gql, we use standart Error
     */
    formatError: (error) => {
        if (error.message && error.message.match("{")) {
            try {
                return JSON.parse(error.message);
            }
            catch (error) { }
        }
        return error;
    },
    /**
     * Turns on Graphql playground
     * if instance is not production
     */
    playground: process.env.PLAYGROUND == 'true',
});
/**
 * Setting headers
 */
app.use((req, res, next) => {
    res.header("x-powered-by", "SMORODINA");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});
/**
 * Http limits
 */
app.use(body_parser_1.default.json({ limit: "50mb" }));
app.use(body_parser_1.default.urlencoded({ limit: "50mb", extended: true }));
apolloServer.applyMiddleware({
    app,
    path: "/graphql"
});
app.listen({ port }, () => {
    console.log(`\x1b[36mEBIRD READY AT ${port}\x1b[0m 🐥🐣🐥`);
    app.get('/', (req, res) => {
        res.type('text');
        res.send("You should't to that 🔪");
    });
    /// API !
    app.post('/api/kanji/', async (req, res) => {
        const writing = req.body.writing;
        console.log(writing);
        res.type('json');
        const kanji = await index_1.prisma.kanjis({
            where: {
                writing_in: writing
            }
        });
        res.send(kanji);
    });
    app.post('/api/word/', async (req, res) => {
        const writing = req.body.writing;
        console.log(writing);
        res.type('json');
        const words = await index_1.prisma.words({
            where: {
                writing_in: writing
            }
        });
        res.send(words);
    });
    app.post('/api/create/word', async (req, res) => {
        const writing = req.body.writing;
        const translation = req.body.translation ? req.body.translation : '';
        const hiragana = req.body.hiragana ? req.body.hiragana : '';
        const romaji = req.body.romaji ? req.body.romaji : '';
        const author = req.body.author ? req.body.author : '';
        const origin = req.body.origin ? req.body.origin : '';
        const usage = req.body.usage ? req.body.usage : '';
        const time = Date.now().toString();
        const createdWord = await index_1.prisma.createWord({
            writing: writing,
            hiragana: hiragana,
            romaji: romaji,
            translation: {
                set: [translation]
            },
            updateHistory: {
                create: {
                    origin,
                    usage,
                    newTranslation: translation,
                    time,
                    author
                }
            }
        });
        res.send(createdWord);
    });
    app.put('/api/word', async (req, res) => {
        const writing = req.body.writing;
        const translation = req.body.translation ? req.body.translation : '';
        const author = req.body.author ? req.body.author : '';
        const origin = req.body.origin ? req.body.origin : '';
        const usage = req.body.usage ? req.body.usage : '';
        const time = Date.now().toString();
        const existWords = await index_1.prisma.words({
            where: {
                writing: writing
            }
        });
        var wordId = null;
        if (Array.isArray(existWords) && existWords.length !== 0) {
            wordId = existWords[0].id;
            const updatedWord = await index_1.prisma.updateWord({
                where: {
                    id: wordId
                },
                data: {
                    translation: {
                        set: [translation, ...existWords[0].translation]
                    },
                    updateHistory: {
                        create: {
                            origin,
                            usage,
                            newTranslation: translation,
                            time,
                            author
                        }
                    }
                }
            });
            res.send(updatedWord);
        }
        res.send(null);
    });
});
//# sourceMappingURL=index.js.map