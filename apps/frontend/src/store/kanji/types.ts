import { Kanji } from '../../../../backend/src/generated/schema'

export interface KanjiState {
    isFetching: boolean
    kanji: Kanji[]
    kanjiSingle: Kanji | null
}

export const enum KanjiTypes {
    FETCH = '@@kanji/FETCH',
    FETCH_SUCCESS = '@@kanji/FETCH_SUCCESS',
    FETCH_ERROR = '@@kanji/FETCH_ERROR',

    FETCH_SINGLE = '@@kanji/FETCH',
    FETCH_SINGLE_SUCCESS = '@@kanji/FETCH_SINGLE_SUCCESS',
    FETCH_SINGLE_ERROR = '@@kanji/FETCH_SINGLE_ERROR',

    CREATE = '@@kanji/CREATE',
    UPDATE = '@@kanji/UPDATE',
    DELETE = '@@kanji/DELETE',
    CLEAR = '@@kanji/CLEAR',
}