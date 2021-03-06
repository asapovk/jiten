import api from "src/api";
import { utils } from 'ui';
import store from "..";
import { WordState, WordTypes } from './types';
import { FetchWordInput, Word, WordSingleInput } from '../../../../backend/src/generated/schema'
namespace Word {
    export const fetch = async (input: FetchWordInput) => {

        try {
            store.dispatch({
                type: WordTypes.FETCH,
                payload: input
            });

            const wordsResponse: { words: any[] } = await api({
                name: "words",
                variables: input
            });

            store.dispatch({
                type: WordTypes.FETCH_SUCCESS,
                payload: wordsResponse.words
            });

        } catch (error) {
            utils.notification({
                title: "Ошибка загрузки пользователей",
                text: error.message,
                decoration: "red"
            });

            store.dispatch({
                type: WordTypes.FETCH_ERROR,
                payload: { error: error.message }
            });
        }
    }

    export const fetchSingle = async (input: WordSingleInput) => {
        try {
            store.dispatch({
                type: WordTypes.FETCH_SINGLE,
                payload: input
            });

            const wordSingleResponse: { wordSingle: Word } = await api({
                name: "wordSingle",
                variables: input
            });

            store.dispatch({
                type: WordTypes.FETCH_SINGLE_SUCCESS,
                payload: wordSingleResponse.wordSingle
            });
        } catch (error) {
            store.dispatch({
                type: WordTypes.FETCH_SINGLE_ERROR,
                payload: error
            });

        }

    }

    export const userCreate = (user: any) => {
        store.dispatch({
            type: WordTypes.CREATE,
            payload: { user }
        })
    }

    export const userUpdate = (user: any) => {
        store.dispatch({
            type: WordTypes.UPDATE,
            payload: { user }
        })
    }

    export const userDelete = (userId: number) => {
        store.dispatch({
            type: WordTypes.DELETE,
            payload: { userId }
        })
    }

    export const clear = () => {
        store.dispatch({
            type: WordTypes.CLEAR
        });
    }
}

export default Word;