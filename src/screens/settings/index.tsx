import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Center } from '../../components/Center'
import { UserDataContext } from '../../components/UserDataProvider'

interface SettingsProps { }

export const Settings: React.FC<SettingsProps> = ({ }) => {
    const { userData, clearData } = useContext(UserDataContext)

    return (
        <View style={styles.contentHolder}>

            <Text style={styles.mainText}>
                Seus Dados
            </Text>

            <View style={styles.formHolder}>
                <View>
                    <Text style={styles.formText}>
                        Altura: {userData?.hight}m
                    </Text>
                    <Text style={styles.formText}>
                        Peso: {userData?.weight}kg
                    </Text>
                    <Text style={styles.formText}>
                        Gênero: {userData?.gender}
                    </Text>
                </View>
                <TouchableOpacity onPress={clearData} style={styles.formButton}>
                    <Text style={styles.buttonText}>
                        Limpar Dados
                </Text>
                </TouchableOpacity>
            </View>

        </View >
    )
}

const styles = StyleSheet.create({
    contentHolder: {
        flex: 1,
        padding: 15,
        marginTop: 30,
        textAlign: "center"
    },
    mainText: {
        fontSize: 24,
        color: '#4a8bbb',
        textAlign: 'left',
        lineHeight: 32,
        fontWeight: 'bold'
    },
    formHolder: {
        borderRadius: 12,
        marginTop: 8,
        backgroundColor: '#f0f0f5',
        flex: 1,
        paddingHorizontal: 24,
        padding: 20,
        justifyContent: 'space-between',
        minHeight: 430,
        paddingTop: 24,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    formText: {
        fontSize: 18,
        color: '#333',
        textAlign: 'justify',
        lineHeight: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    formButton: {
        backgroundColor: '#4a8bbb',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 100,
    },
    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    }
});