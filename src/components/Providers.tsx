import React from 'react'
import Routes from '../Routes'
import { UserDataProvider } from './UserDataProvider'

interface ProvidersProps {

}

export const Providers: React.FC<ProvidersProps> = ({}) => {
        return (
            <UserDataProvider>
                <Routes/>
            </UserDataProvider>
        )
}