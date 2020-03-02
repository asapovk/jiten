import { Express } from 'express'
import { word, kanji, wordsWithKanji } from './query'
import { updateWord, createWord } from './mutation'


const api = async (app: Express) => {


    //queries
    app.post('/api/kanji', kanji)
    app.post('/api/word/', word)
    app.post('/api/words_with_kanji', wordsWithKanji.wordsWithKanji)

    //create
    app.post('/api/create/word', createWord)

    //update
    app.put('/api/word', updateWord)
}
export default api