/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Flexbox, Table, TextField, Button, Icon, Select, InlineFilter } from 'ui'
import { useEffect, useCallback, useState } from 'react'
import { WordActions, KanjiActions } from '../../../../store/actions'
import { useMappedState } from 'redux-react-hook'
import { ApplicationState } from '../../../../store'
import { Link } from 'react-router-dom'
import { Word } from '../../../../../../backend/src/generated/schema'
interface UsageWordListProps {
    words: any//Word[] | []
}

const UsageWordList = (props: UsageWordListProps) => {
    const { words } = props

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

            <Table data={words} columns={tableColumns} />

        </Flexbox>

    )


}

export default UsageWordList