import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql/language/printer';

//import { localStorage } from "Utils";

import queries from "./queries";
declare const $_API_DOMAIN_$: string;


const api = async (name: string, variables: any = {}) => {

    //    const session = localStorage.getPreference("session") || "";

    const requestOptions = {
        headers: {
            //          session
        }
    };

    try {
        const gqlClient = new GraphQLClient($_API_DOMAIN_$ + '/graphql', requestOptions);
        const result = await gqlClient.rawRequest(print(queries[name]), variables);
        console.log(result)
        return result.data //&& result.data[name];
    } catch (error) {

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

export default api;
