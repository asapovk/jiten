import { Reducer } from 'redux';
import { WordState, WordTypes } from './types';

// Type-safe initialState!
const initialState: WordState = {
    isFetching: false,
    words: []
}

const reducer: Reducer<WordState> = (state = initialState, action) => {

    switch (action.type) {

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
                words: action.payload,
            }
        }

        case WordTypes.FETCH_ERROR: {
            return {
                ...state,
                isFetching: false
            }
        }

        case WordTypes.CREATE: {
            return {
                ...state,
                users: [action.payload.word].concat(state.words),
            }
        }

        case WordTypes.UPDATE: {
            return {
                ...state,
                words: state.words.map(word => {
                    if (word.wordId === action.payload.words.wordId) {
                        return action.payload.user;
                    }
                    return word;
                })
            }
        }

        case WordTypes.DELETE: {
            return {
                ...state,
                users: state.words.filter(word => word.wordId !== action.payload.wordId),
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

