import React, { useContext, useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Center } from '../../components/Center';
import { NavProps } from '../../components/ParamList';
import { Pedometer } from 'expo-sensors';
import { UserDataContext } from '../../components/UserDataProvider';

const Main = ({ }: NavProps<'Main'>) => {

    const [currentStepCount, setCurrentStepCount] = useState(0)
    const [startTime, setStartTime] = useState(Date.now())
    const [activeTime, setActiveTime] = useState(0);
    const { userData } = useContext(UserDataContext)
    const userWeight = (userData && userData.weight) || 1
    const userHight = (userData && userData.hight) || 1
    const strideLenght = userHight * 100 * (userData?.gender === 'Male' ? 0.415 : 0.413)
    const caloriesPerMile = userWeight * 0.53 * 2.205
    const caloriesPerStride = caloriesPerMile * strideLenght / 1609


    useEffect(() => {
        subscribe()
    }, [])

    useEffect(() => {
        setInterval(() => updateTimer(), 1000)
    }, [])

    const subscribe = () => {
        Pedometer.watchStepCount(result => {
            setCurrentStepCount(result.steps)
        })
    }

    const updateTimer = () => {
        setActiveTime(Math.floor((Date.now() - startTime) / 1000))
    }

    return (
        <Center>
            <View>
                <View style={styles.contentMain}>
                    <Text style={styles.textSecundary}>Passos de Hoje</Text>
                    <Text style={styles.textMain}>{currentStepCount}</Text>
                </View>
                <View>
                    <View style={styles.contentSecundary}>
                        <View style={styles.contentSide}>
                            <Text style={[styles.textSide, {color: '#d69738'}]}>{(caloriesPerStride * currentStepCount).toFixed(0)}</Text>
                            <Text style={styles.textSecundary}>Calorias</Text>
                        </View>

                        <View style={styles.contentSide}>
                            <Text style={[styles.textSide, {color: '#6fd638'}]}>{Math.floor(activeTime / 60) + 'm ' + ((activeTime - Math.floor(activeTime / 60) * 60) < 10 ? '0' : '') + (activeTime - Math.floor(activeTime / 60) * 60)}s</Text>
                            <Text style={styles.textSecundary} >Tempo Ativo</Text>
                        </View>

                        <View style={styles.contentSide}>
                            <Text style={[styles.textSide, {color: '#38b9d6'}]}>{(strideLenght / 100 * currentStepCount).toFixed(1)}</Text>
                            <Text style={styles.textSecundary}>Metros</Text>
                        </View>
                    </View>

                </View>
            </View>
        </Center>
    )
}

const styles = StyleSheet.create({
    contentMain: {
        flex: 0.8,
        marginTop: 60
    },
    textMain: {
        fontSize: 72,
        textAlign: 'center',
        color: '#4a8bbb',
        fontWeight: '600',
        fontFamily: 'monospace'
    },
    textSecundary: {
        fontSize: 18,
        textAlign: 'center',
        color: '#babab5',
        fontWeight: '600'
    },
    contentSecundary: {
        flexDirection: "row",
    },
    contentSide: {
        textAlign: 'center',
        padding: 10
    },
    textSide: {
        fontSize: 28,
        fontFamily: 'notoserif',
        letterSpacing: .1,
        textAlign: 'center',
    }
});

export default Main