import { Express } from 'express'
import { word, kanji } from './query'
import { updateWord, createWord } from './mutation'


const api = async (app: Express) => {


    //queries
    app.post('/api/kanji', kanji)
    app.post('/api/word/', word)


    //create
    app.post('/api/create/word', createWord)

    //update
    app.put('/api/word', updateWord)
}
export default api