import { Reducer } from 'redux';
import { WordState, WordTypes } from './types';

// Type-safe initialState!
const initialState: WordState = {
    isFetching: false,
    words: [],
    wordSingle: null
}

const reducer: Reducer<WordState> = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {

        case WordTypes.FETCH: {
            return {
                ...state,
                isFetching: true,
            }
        }

        case WordTypes.FETCH_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                words: payload,
            }
        }

        case WordTypes.FETCH_ERROR: {
            return {
                ...state,
                isFetching: false
            }
        }
        case WordTypes.FETCH_SINGLE_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                wordSingle: payload
            }
        }

        case WordTypes.CREATE: {
            return {
                ...state,
                users: [payload.word].concat(state.words),
            }
        }

        case WordTypes.UPDATE: {
            return {
                ...state,
                words: state.words.map(word => {
                    if (word.id === payload.words.id) {
                        return payload.user;
                    }
                    return word;
                })
            }
        }

        case WordTypes.DELETE: {
            return {
                ...state,
                users: state.words.filter(word => word.id !== payload.id),
            }
        }

        case WordTypes.CLEAR: {
            return { ...initialState }
        }

        default: {
            return state
        }
    }
}

export { reducer as word };

