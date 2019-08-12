import store from './store';


import { word } from './word/reducer';
import { WordState } from './word/types';


export interface ApplicationState {
    word: WordState,
}

export default store({
    word,
});