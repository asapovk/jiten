import * as Pages from './Pages';
import IconTypes from 'ui/core/Icon/types';

interface Route {
    title: string
    icon: IconTypes.Type
    path: string
    component: () => JSX.Element
    onlyForAdmin: boolean
    searchable: boolean
    addAction?: string
    tools?: {
        key: string
        render: any
    }[]
    addType?: 'form' | 'modal'
}

const routes: Route[] = [

    // {
    //     title: 'Организации',
    //     icon: 'home',
    //     path: "/mod/ebird/orgs",
    //     component: Pages.Org,
    //     onlyForAdmin: true,
    //     searchable: true,
    //     addAction: 'Добавить организацию',
    //     addType: 'form'
    // },
    // {
    //     title: 'Приложения',
    //     icon: 'applications',
    //     path: "/mod/ebird/apps",
    //     component: Pages.App,
    //     onlyForAdmin: true,
    //     searchable: true,
    //     addAction: 'Добавить приложение',
    //     addType: 'form'
    // },
    {
        title: 'Пользователи',
        icon: 'users-add',
        path: "/mod/ebird/users",
        component: Pages.Word,
        onlyForAdmin: true,
        searchable: true,
        addAction: 'Добавить пользователя',
        addType: 'form'
    },
]

export default () => {
    return routes
} 