/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Flexbox, Table, D1 } from 'ui'
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
            title: ' ', dataIndex: 'writing', render: (row, value) => {
                return <Link to={`/kanji/${value}`}>
                    <D1 children={value} />
                </Link>
            }
        },
        { title: 'Значение', dataIndex: 'meaning' },
        { title: 'Он-чтение', dataIndex: 'on' },
        { title: 'Он-чтение латиницей', dataIndex: 'onRomaji' },
        { title: 'кун-чтение', dataIndex: 'kun' },
        { title: 'кун-чтение латиницей', dataIndex: 'kunRomaji' }
    ]

    const tableData = kanji.map(item => {
        return {
            ...item,
            on: item.on ? item.on.join(', ') : null,
            kun: item.kun ? item.kun.join(', ') : null,
            onRomaji: item.onRomaji ? item.onRomaji.join(', ') : null,
            kunRomaji: item.kunRomaji ? item.kunRomaji.join(', ') : null,
            meaning: item.meaning ? item.meaning.join(', ') : null,
        }
    })
    return (

        <Flexbox column mt={50}>
            {
                kanji.length > 0 ?
                    <Table data={tableData} columns={tableColumns} />
                    : null
            }
        </Flexbox>

    )


}

export default KanjiList