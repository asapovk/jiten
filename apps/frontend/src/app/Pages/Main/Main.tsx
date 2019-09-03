/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Flexbox, Table, TextField, Button, Icon, Select, InlineFilter } from 'ui'
import { useEffect, useCallback, useState } from 'react'
import { WordActions, KanjiActions } from '../../../store/actions'
import { useMappedState } from 'redux-react-hook'
import { ApplicationState } from '../../../store'
import { Link } from 'react-router-dom'
import { WordList, KanjiList } from './components'

const WordPage = (props) => {


    const [searchValue, setSearchValue] = useState('')
    const [selectedType, setSelectedType] = useState({
        index: 0,
        label: 'слова',
        selected: false
    })
    const [selectedSearchType, setSelectedSearchType] = useState({
        index: 0,
        label: 'написанию',
        selected: false
    })

    const mappedState = useCallback((state: ApplicationState) => ({
        words: state.word.words
    }), [])
    const { words } = useMappedState(mappedState)
    const tableColumns = [
        {
            title: 'Cлово', dataIndex: 'writing', render: (row, value) => {
                return <Link to={`/word/${value}`}> {value} </Link>
            }
        },
        { title: 'Перевод', dataIndex: 'translation' },
        { title: 'Хирагана', dataIndex: 'hiragana' },
        { title: 'Ромадзи', dataIndex: 'romaji' }
    ]

    const searchTypeMapLabelWord = (label: String) => {
        switch (label) {
            case 'написанию':
                return 'writing'
            case 'хирагане':
                return 'hiragana'
            case 'латинице':
                return 'romaji'
            default:
                return 'writing'
        }
    }
    const searchTypeMapLabelKanji = (label: String) => {
        switch (label) {
            case 'написанию':
                return 'writing'
            case 'он-чтению':
                return 'kun'
            case 'кун-чтению':
                return 'kun'
            case 'он-чтению латиницей':
                return 'onRomaji'
            case 'кун-чтению латиницей':
                return 'kunRomaji'
            default:
                return 'writing'
        }
    }

    const inlineFilterValuesWord =
        [
            {
                index: 0,
                label: 'написанию',
                selected: selectedSearchType.label === 'написанию'
            },
            {
                index: 1,
                label: 'латинице',
                selected: selectedSearchType.label === 'латинице'
            },
            {
                index: 2,
                label: 'хирагане',
                selected: selectedSearchType.label === 'хирагане'
            }
        ]
    const inlineFilterValuesKanji =
        [
            {
                index: 0,
                label: 'написанию',
                selected: selectedSearchType.label === 'написанию'
            },
            {
                index: 1,
                label: 'кун-чтению',
                selected: selectedSearchType.label === 'кун-чтению'
            },
            {
                index: 1,
                label: 'кун-чтению латиницей',
                selected: selectedSearchType.label === 'кун-чтению латиницей'
            },
            {
                index: 2,
                label: 'он-чтению латиницей',
                selected: selectedSearchType.label === 'он-чтению латиницей'
            }
        ]
    return (
        <Flexbox column mt={50} >
            <Flexbox mb={10}>
                <InlineFilter
                    onChange={
                        (value: any) => {
                            if (value.label === 'кандзи' || value.label === 'слова') {
                                setSelectedType(value)

                            }
                            else {
                                setSelectedSearchType(value)
                            }
                        }
                    }
                    values={
                        [[
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
                        selectedType.label === 'кандзи' ? inlineFilterValuesKanji : inlineFilterValuesWord
                        ]}
                />
            </Flexbox>
            < Flexbox >
                <TextField
                    size={'large'}
                    onChange={(e) => {
                        setSearchValue(e.target.value)
                    }} />
                < Button
                    size={'large'}
                    color={'brand-red'}
                    onClick={() => {
                        if (selectedType.label === 'слова') {
                            WordActions.fetch({
                                searchInput: searchValue,
                                searchType: searchTypeMapLabelWord(selectedSearchType.label)
                            })
                        }
                        if (selectedType.label === 'кандзи') {
                            KanjiActions.fetch({
                                searchInput: searchValue,
                                searchType: searchTypeMapLabelKanji(selectedSearchType.label)
                            })
                        }

                    }
                    }
                >
                    <Icon size={'1.8rem'} type={'search'} />
                </Button>
            </Flexbox>
            {selectedType.label === 'слова' ? <WordList /> : null}
            {selectedType.label === 'кандзи' ? <KanjiList /> : null}
        </Flexbox>

    )


}

export default WordPage