import { Reducer } from 'redux';
import { KanjiState, KanjiTypes } from './types';
import KanjiSingle from 'src/app/Pages/Word/single';

// Type-safe initialState!
const initialState: KanjiState = {
    isFetching: false,
    kanji: [],
    kanjiSingle: null
}

const reducer: Reducer<KanjiState> = (state = initialState, action) => {
    const { payload, type } = action
    switch (type) {

        case KanjiTypes.FETCH: {
            return {
                ...state,
                isFetching: true,
            }
        }

        case KanjiTypes.FETCH_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                kanji: payload,
            }
        }

        case KanjiTypes.FETCH_ERROR: {
            return {
                ...state,
                isFetching: false
            }
        }

        case KanjiTypes.FETCH_SINGLE_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                kanjiSingle: payload
            }
        }

        case KanjiTypes.CREATE: {
            return {
                ...state,
                kanji: [payload.word].concat(state.kanji),
            }
        }

        case KanjiTypes.UPDATE: {
            return {
                ...state,
                kanji: state.kanji.map(kanji => {
                    if (kanji.kanjiId === payload.kanji.kanjiId) {
                        return payload.kanji;
                    }
                    return kanji;
                })
            }
        }

        case KanjiTypes.DELETE: {
            return {
                ...state,
                users: state.kanji.filter(kanji => kanji.kanjiId !== payload.kanjiId),
            }
        }

        case KanjiTypes.CLEAR: {
            return { ...initialState }
        }

        default: {
            return state
        }
    }
}

export { reducer as kanji };
