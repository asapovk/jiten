/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Flexbox, Table, TextField, Button, Icon } from 'ui'
import { useEffect, useCallback, useState } from 'react'
import { WordActions } from '../../../store/actions'
import { useMappedState } from 'redux-react-hook'
import { ApplicationState } from '../../../store'
import { Link } from 'react-router-dom'

const WordPage = (props) => {


    const [searchValue, setSearchValue] = useState('')

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
    console.log(searchValue)
    return (
        <Flexbox column>
            <Flexbox>
                <TextField
                    size={'large'}
                    onChange={(e) => {
                        setSearchValue(e.target.value)
                    }} />
                <Button
                    size={'large'}
                    color={'brand-red'}
                    onClick={}
                >
                    <Icon size={'1.8rem'} type={'search'} />
                </Button>
            </Flexbox>
            <Table data={words} columns={tableColumns} />
        </Flexbox>

    )


}

export default WordPage