import React, { useContext, useEffect, useState } from 'react'
import { Text } from 'react-native'
import { Center } from '../../components/Center';
import { NavProps } from '../../components/ParamList';
import { Pedometer } from 'expo-sensors';
import { UserDataContext } from '../../components/UserDataProvider';

const Main = ({ }: NavProps<'Main'>) => {

    const [currentStepCount, setCurrentStepCount] = useState(0)
    const { userData } = useContext(UserDataContext)
    const userWeight =  (userData && userData.weight) || 1
    const userHight = (userData && userData.hight) || 1
    const strideLenght = userHight * 100 * (userData?.gender === 'Male' ? 0.415 : 0.413)
    const caloriesPerMile = userWeight * 0.53 * 2.205
    const caloriesPerStride = caloriesPerMile * strideLenght / 1609

    useEffect(() => {
        subscribe()
    }, [])

    const subscribe = () => {
        Pedometer.watchStepCount(result => {
            setCurrentStepCount(result.steps)
        })
    }

    return (
        <Center>
            <Text>
                Passos: {currentStepCount}
            </Text>

            <Text>
                Calorias: {caloriesPerStride * currentStepCount}
            </Text>

        </Center>
    )
}

/* Females: Your height in inches multiplied by 0.413 equals your stride length
Males: Your height in inches multiplied by 0.415 equals your stride length */

/* Calories Burned = #steps * .04 * BF * AF * SF

Where BF, AF, and SF are the bmi, age, and speed factor. */

/* 0.57 x peso = CaloriasPorMilha
CaloriasporMilha / altura*0.413 F ou *0.415 M = calorias por passo */

export default Main