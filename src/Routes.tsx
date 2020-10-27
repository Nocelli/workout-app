import { UserDataContext } from './components/UserDataProvider'
import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ActivityIndicator, AsyncStorage } from 'react-native'
import { FirstUseStack } from './components/FirstUseStack'
import { Center } from './components/Center'
import { Tabs } from './components/Tabs'

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({ }) => {

    const { userData, setData } = useContext(UserDataContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        AsyncStorage.getItem('userData')
            .then(userDataString => {
                if (userDataString) {
                    setData(JSON.parse(userDataString))
                }
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    if (loading)
        return (
            <Center>
                <ActivityIndicator size='large' color="#0000ff" />
            </Center>
        )
    else
        return (
            <NavigationContainer>
                {userData ? <Tabs /> : <FirstUseStack/>}
            </NavigationContainer>
        )
}

export default Routes