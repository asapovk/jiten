export interface KanjiState {
    isFetching: boolean
    kanji: any[]
}

export const enum KanjiTypes {
    FETCH = '@@kanji/FETCH',
    FETCH_SUCCESS = '@@kanji/FETCH_SUCCESS',
    FETCH_ERROR = '@@kanji/FETCH_ERROR',

    CREATE = '@@kanji/CREATE',
    UPDATE = '@@kanji/UPDATE',
    DELETE = '@@kanji/DELETE',
    CLEAR = '@@kanji/CLEAR',
}