import api from "src/api";
import { utils } from 'ui';
import store from "..";
import { KanjiState, KanjiTypes } from './types';
import { Kanji } from '../../../../backend/src/generated/schema'


namespace Kanji {
    export const fetch = async () => {

        try {
            store.dispatch({
                type: KanjiTypes.FETCH
            });

            const kanjiResponse: { kanjis: Kanji[] } = await api({
                name: "kanji"
            });

            store.dispatch({
                type: KanjiTypes.FETCH_SUCCESS,
                payload: kanjiResponse.kanjis
            });

        } catch (error) {
            utils.notification({
                title: "Ошибка загрузки",
                text: error.message,
                decoration: "red"
            });

            store.dispatch({
                type: KanjiTypes.FETCH_ERROR,
                payload: { error: error.message }
            });
        }
    }
    export const fetchSingle = async ({ }) => {
        try {
            store.dispatch({
                type: KanjiTypes.FETCH_SINGLE
            });
        } catch (error) {

        }

    }

    export const kanjiCreate = (kanji: any) => {
        store.dispatch({
            type: KanjiTypes.CREATE,
            payload: { kanji }
        })
    }

    export const kanjiUpdate = (kanji: any) => {
        store.dispatch({
            type: KanjiTypes.UPDATE,
            payload: { kanji }
        })
    }

    export const kanjiDelete = (kanjiId: number) => {
        store.dispatch({
            type: KanjiTypes.DELETE,
            payload: { kanjiId }
        })
    }

    export const clear = () => {
        store.dispatch({
            type: KanjiTypes.CLEAR
        });
    }
}

export default Kanji;