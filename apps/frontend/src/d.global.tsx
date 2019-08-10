import { FC } from 'react';

export interface ConnectUser {
    userId: number | null
    login: string | null
    firstName: string | null
    lastName: string | null
    middleName: string | null
    email: string | null
    phone: string | null
    apiToken: string | null
    sessionExpireTime: number | null
    connectedApps: { code: string, name: string }[]
    connectedRoles: { code: string, name: string }[]
    session: string | null
    params: any
    theme: string
}

export interface ConnectModuleProps { 
    user: ConnectUser
    exit: () => void
}

type ConnectModule = FC<ConnectModuleProps>;

declare global {
    interface Window {
        ConnectModuleInit: (moduleName: string, component: ConnectModule) => void
    }
}