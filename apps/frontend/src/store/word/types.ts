

export interface WordState {
    isFetching: boolean
    words: any[]
}

export const enum WordTypes {
    FETCH = '@@word/FETCH',
    FETCH_SUCCESS = '@@word/FETCH_SUCCESS',
    FETCH_ERROR = '@@word/FETCH_ERROR',

    CREATE = '@@word/CREATE',
    UPDATE = '@@word/UPDATE',
    DELETE = '@@word/DELETE',
    CLEAR = '@@word/CLEAR',
}

