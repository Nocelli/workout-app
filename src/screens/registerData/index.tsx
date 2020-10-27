import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Center } from '../../components/Center';
import { NavProps } from '../../components/ParamList';

const RegisterData = ({ navigation, route }: NavProps<'RegisterData'>) => {
    return (
        <Center>
            <Text>
                Altura
            </Text>
            <Text>
                Peso
            </Text>
            <Text>
                Genero
            </Text>
        </Center>
    )
}

/* Females: Your height in inches multiplied by 0.413 equals your stride length
Males: Your height in inches multiplied by 0.415 equals your stride length */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default RegisterData