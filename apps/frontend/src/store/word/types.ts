import { Word } from '../../../../backend/src/generated/schema'


export interface WordState {
    isFetching: boolean
    words: Word[]
    wordSingle: Word | null
}

export const enum WordTypes {
    FETCH = '@@word/FETCH',
    FETCH_SUCCESS = '@@word/FETCH_SUCCESS',
    FETCH_ERROR = '@@word/FETCH_ERROR',


    FETCH_SINGLE = '@@word/FETCH_SINGLE',
    FETCH_SINGLE_SUCCESS = '@@word/FETCH_SINGLE_SUCCESS',
    FETCH_SINGLE_ERROR = '@@word/FETCH_SINGLE_ERROR',

    CREATE = '@@word/CREATE',
    UPDATE = '@@word/UPDATE',
    DELETE = '@@word/DELETE',
    CLEAR = '@@word/CLEAR',
}

