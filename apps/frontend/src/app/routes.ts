import * as Pages from './Pages';
import IconTypes from 'ui/core/Icon/types';
import { fstat } from 'fs';

interface Route {
    title: string
    icon: IconTypes.Type
    path: string
    component: (props: any) => JSX.Element
    onlyForAdmin: boolean
    searchable: boolean
    addAction?: string
    tools?: {
        key: string
        render: any
    }[]
    isSingle: boolean
    addType?: 'form' | 'modal'
}

const routes: Route[] = [

    {
        title: 'Слова',
        icon: 'users-add',
        path: "/words",
        component: Pages.Word,
        onlyForAdmin: false,
        searchable: true,
        addAction: 'Добавить пользователя',
        addType: 'form',
        isSingle: false
    },
    {
        title: 'Слова',
        icon: 'users-add',
        path: "/word/:name",
        component: Pages.WordSingle,
        onlyForAdmin: false,
        searchable: true,
        addAction: 'Добавить пользователя',
        addType: 'form',
        isSingle: true
    },

    {
        title: 'Кандзи',
        icon: 'users-add',
        path: "/kanji",
        component: Pages.Kanji,
        onlyForAdmin: false,
        searchable: true,
        addAction: 'Добавить пользователя',
        addType: 'form',
        isSingle: false
    },
    {
        title: 'Кандзи',
        icon: 'users-add',
        path: "/kanji/:name",
        component: Pages.KanjiSingle,
        onlyForAdmin: false,
        searchable: true,
        addAction: 'Добавить пользователя',
        addType: 'form',
        isSingle: true
    }
]

export default () => {
    return routes
} 