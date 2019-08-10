import Queue from "./queue";
import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql/language/printer';

// import { AppActions } from 'src/store/actions';

import queries from "./queries";
import { utils } from "ui";

declare const $_API_DOMAIN_$: string;

interface APIProps {
    name: string
    variables?: { [key: string]: any }
    gRecaptchaResponse?: string
    code?: string
}

const api = async (props: APIProps): Promise<any> => {
    const { name, variables, gRecaptchaResponse, code } = props;

    const queryId = Queue.add(name);

    const requestOptions = {
        headers: {
        }
    };

    try {
        /* Initialize GrapgQL Client */
        const gqlClient = new GraphQLClient($_API_DOMAIN_$ + "/graphql", requestOptions);
        const query = queries[name];

        if (!query) {
            throw new Error(`Query "${name}" not found!`);
        }

        const result = await gqlClient.rawRequest(print(query), variables);

        /* Прекращаем выполнение функций если ее нет в очереди на ожидание */
        if (!Queue.isExist(queryId)) {
            return new Promise(() => { });
        }

        Queue.done(queryId, result);
        return result.data;
    } catch (error) {

        console.log(error);

        if (!error.response) {
            throw ({
                code: -1,
                message: 'Сервис временно недоступен'
            });
        }

        const errors = error.response.errors;

        if (!Array.isArray(error.response.errors)) {
            throw ({
                code: -3,
                message: "Некорректная ошибка от сервера"
            });
        }

        const apiError = errors[0];

        if (![200, 201, 202, 203].includes(apiError.code)) {
            Queue.done(queryId, apiError);

            utils.alert({
                text: apiError.message,
                title: 'Ошибка'
            });

            throw ({
                code: apiError.code,
                key: apiError.key,
                message: (apiError.code !== 9999 || process.env.NODE_ENV === 'testflight')
                    ? apiError.message
                    : "Возникла непредвиденная ошибка"
            });
        }
    }
};

export default api;