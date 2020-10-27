import React, { useState } from 'react'
import { AsyncStorage } from 'react-native'



type User = null | {
    weight: number,
    hight: number,
    gender: string
}

interface UserDataProviderProps { }

export const UserDataContext = React.createContext<{
    userData: User,
    clearData: () => void
    setData: (userData: User) => Promise<void>
}>({
    userData: null,
    clearData: () => { },
    setData: async(userData: User) => { }
})

export const UserDataProvider: React.FC<UserDataProviderProps> = ({ children }) => {
    const [userData, setUserData] = useState<User>(null)
    return (
        <UserDataContext.Provider value={{
            userData,
            clearData: async () => {
                setUserData(null)
                await AsyncStorage.removeItem('userData')

                //Maybe add Error handling in the future???
            },
            setData: async (userData: User) => {
                setUserData(userData)
                await AsyncStorage.setItem('userData', JSON.stringify(userData))

                //Maybe add Error handling in the future???
            }
        }}>
            {children}
        </UserDataContext.Provider>
    )
}