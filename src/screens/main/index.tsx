import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Center } from '../../components/Center';
import { NavProps } from '../../components/ParamList';

const Main = ({ navigation, route }: NavProps<'Main'>) => {
    return (
        <Center>
            <Text>
                Hola Mundo!
            </Text>
        </Center>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default Main