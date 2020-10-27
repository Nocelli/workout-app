import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import RegisterData from '../screens/registerData'
import { ParamList } from './ParamList'

interface FirstUseStackProps {

}

const Stack = createStackNavigator<ParamList>()

export const FirstUseStack: React.FC<FirstUseStackProps> = ({}) => {
        return (
            <Stack.Navigator headerMode='none' initialRouteName='RegisterData'>
                <Stack.Screen name='RegisterData' component={RegisterData} />
            </Stack.Navigator>
        )
}