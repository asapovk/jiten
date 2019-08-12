import store from './store';

import { kanji } from './kanji/reducer'
import { word } from './word/reducer';
import { WordState } from './word/types';
import { KanjiState } from './kanji/types'

export interface ApplicationState {
    word: WordState,
    kanji: KanjiState
}

export default store({
    word,
    kanji
});