/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Flexbox, Table } from 'ui'
import { useEffect, useCallback } from 'react'
import { WordActions } from '../../../store/actions'
import { useMappedState } from 'redux-react-hook'
import { ApplicationState } from '../../../store'
import { Link } from 'react-router-dom'

const WordPage = (props) => {

    useEffect(() => {
        WordActions.fetch()
    }, [])

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
        { title: 'Хирагана', dataIndex: 'hiragana' }
    ]

    return (

        <Table data={words} columns={tableColumns} />

    )


}

export default WordPage