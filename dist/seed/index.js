"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_request_1 = require("graphql-request");
const printer_1 = require("graphql/language/printer");
//import { localStorage } from "Utils";
const queries_1 = __importDefault(require("./queries"));
const api = async (name, variables = {}) => {
    //    const session = localStorage.getPreference("session") || "";
    const requestOptions = {
        headers: {
        //          session
        }
    };
    try {
        const gqlClient = new graphql_request_1.GraphQLClient($_API_DOMAIN_$ + '/graphql', requestOptions);
        const result = await gqlClient.rawRequest(printer_1.print(queries_1.default[name]), variables);
        console.log(result);
        return result.data; //&& result.data[name];
    }
    catch (error) {
        const errors = error.response.errors;
        if (!Array.isArray(error.response.errors)) {
            throw ({
                code: -3,
                message: "Некорректная ошибка от сервера"
            });
        }
        const apiError = errors[0];
        throw ({
            code: apiError.code,
            message: (apiError.code !== 9999 || process.env.NODE_ENV === 'testflight')
                ? apiError.message
                : "Возникла непредвиденная ошибка"
        });
    }
};
exports.default = api;
//# sourceMappingURL=index.js.map