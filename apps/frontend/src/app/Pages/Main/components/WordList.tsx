/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Flexbox, Table, TextField, Button, Icon, Select, InlineFilter } from 'ui'
import { useEffect, useCallback, useState } from 'react'
import { WordActions, KanjiActions } from '../../../../store/actions'
import { useMappedState } from 'redux-react-hook'
import { ApplicationState } from '../../../../store'
import { Link } from 'react-router-dom'

const WordList = (props) => {


    const mappedState = useCallback((state: ApplicationState) => ({
        words: state.word.words
    }), [])
    const { words } = useMappedState(mappedState)
    const tableColumns = [
        {
            title: 'Cлово', dataIndex: 'writing', render: (row, value) => {
                return <Link to={`/word/${value}`}>{value}</Link>
            }
        },
        { title: 'Перевод', dataIndex: 'translation' },
        { title: 'Хирагана', dataIndex: 'hiragana' },
        { title: 'Ромадзи', dataIndex: 'romaji' }
    ]
    return (
        <Flexbox column mt={50}>
            {
                words.length > 0 ?
                    <Table data={words} columns={tableColumns} />
                    : null
            }
        </Flexbox>

    )


}

export default WordList