/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Flexbox, Table, TextField, Button, Icon, Select, InlineFilter } from 'ui'
import { useEffect, useCallback, useState } from 'react'
import { WordActions, KanjiActions } from '../../../store/actions'
import { useMappedState } from 'redux-react-hook'
import { ApplicationState } from '../../../store'
import { Link } from 'react-router-dom'

const WordPage = (props) => {


    const [searchValue, setSearchValue] = useState('')
    const [selectedType, setSelectedType] = useState({
        index: 0,
        label: '',
        selected: false
    })
    const [selectedSearchType, setSelectedSearchType] = useState({
        index: 0,
        label: '',
        selected: false
    })

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
            <Flexbox mb={10}>
                <InlineFilter
                    onChange={(value: any) => {
                        if (value.label === 'кандзи' || value.label === 'слова') {
                            setSelectedType(value)

                        }
                        else {
                            setSelectedSearchType(value)
                        }
                    }}
                    values={[[
                        {
                            index: 0,
                            label: 'кандзи',
                            selected: selectedType.label === 'кандзи'
                        },
                        {
                            index: 1,
                            label: 'слова',
                            selected: selectedType.label === 'слова'
                        }
                    ],
                    [
                        {
                            index: 0,
                            label: 'написание',
                            selected: selectedSearchType.label === 'написание'
                        },
                        {
                            index: 1,
                            label: 'ромадзи',
                            selected: selectedSearchType.label === 'ромадзи'
                        },
                        {
                            index: 2,
                            label: 'хирагана',
                            selected: selectedSearchType.label === 'хирагана'
                        }
                    ]
                    ]}
                />
            </Flexbox>
            <Flexbox>
                <TextField
                    size={'large'}
                    onChange={(e) => {
                        setSearchValue(e.target.value)
                    }} />
                <Button
                    size={'large'}
                    color={'brand-red'}
                    onClick={() => {
                        if (selectedType.label === 'слова') {
                            WordActions.fetch({ searchInput: searchValue })
                        }
                        if (selectedType.label === 'кандзи') {
                            //KanjiActions.fetch({ searchInput: searchValue })
                        }

                    }
                    }
                >
                    <Icon size={'1.8rem'} type={'search'} />
                </Button>
            </Flexbox>
            {
                words.length > 0 ?
                    <Table data={words} columns={tableColumns} />
                    : null
            }
        </Flexbox>

    )


}

export default WordPage