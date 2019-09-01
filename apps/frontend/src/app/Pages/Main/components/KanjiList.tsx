/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Flexbox, Table } from 'ui'
import { useEffect, useCallback } from 'react'
import { KanjiActions } from '../../../../store/actions'
import { useMappedState } from 'redux-react-hook'
import { ApplicationState } from '../../../../store'
import { Link } from 'react-router-dom'

const KanjiList = (props) => {

    const mappedState = useCallback((state: ApplicationState) => ({
        kanji: state.kanji.kanji
    }), [])
    const { kanji } = useMappedState(mappedState)

    const tableColumns = [
        {
            title: 'Cлово', dataIndex: 'writing', render: (row, value) => {
                return <Link to={`/kanji/${value}`}>{value}</Link>
            }
        },
        { title: 'Перевод', dataIndex: 'translation' },
        { title: 'Хирагана', dataIndex: 'hiragana' }
    ]

    return (

        <Flexbox column mt={50}>
            {
                kanji.length > 0 ?
                    <Table data={kanji} columns={tableColumns} />
                    : null
            }
        </Flexbox>

    )


}

export default KanjiList