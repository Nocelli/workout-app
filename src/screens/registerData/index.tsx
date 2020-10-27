import React, { useContext, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Center } from '../../components/Center';
import { NavProps } from '../../components/ParamList';
import { FontAwesome } from '@expo/vector-icons';
import { UserDataContext } from '../../components/UserDataProvider';

const RegisterData = ({ }: NavProps<'RegisterData'>) => {

    const { setData } = useContext(UserDataContext)
    const [isMaleSelected, setIsMaleSelected] = useState<boolean>(true)
    const [weight, setWeight] = useState<string>('')
    const [hight,setHight] = useState<string>('')

    const handleGenderSelect = () => {
        setIsMaleSelected(!isMaleSelected)
    }

    const handleSubmit = () => {
        setData({
            weight,
            hight,
            gender: isMaleSelected ? 'Male' : 'Female'
        })
    }

    return (
        <Center>
            <View style={styles.contentHolder}>
                <Text style={styles.mainText}>
                    Antes de começarmos, preencha abaixo algumas de suas informações...
                </Text>
                <View style={styles.formHolder}>

                    <Text style={styles.formText}>
                        Peso (Em Kilos)
                    </Text>

                    <TextInput style={styles.formInput} autoFocus keyboardType='numeric'
                        placeholder='Digite o seu peso'
                        value={weight}
                        onChangeText={value => setWeight(value)}
                    />
                    
                    <Text style={styles.formText}>
                        Altura (Em metros)
                    </Text>

                    <TextInput style={styles.formInput} keyboardType='numeric' 
                        placeholder='Digite sua altura'
                        value={hight}
                        onChangeText={value => setHight(value)}
                    />

                    <Text style={styles.formText}>
                        Genero
                    </Text>
                    <View style={styles.formGenderPicker}>
                        <TouchableOpacity
                            style={isMaleSelected ? styles.formGenderSelected : styles.formGender}
                            onPress={isMaleSelected ? () => { } : handleGenderSelect}

                        >
                            <FontAwesome name="male" size={32} color="#3e3eff" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={isMaleSelected ? styles.formGender : styles.formGenderSelected}
                            onPress={isMaleSelected ? handleGenderSelect : () => { }}
                        >
                            <FontAwesome name="female" size={32} color="#ff3e3e" />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.formButton} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Confirmar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Center>
    )
}

/* Females: Your height in inches multiplied by 0.413 equals your stride length
Males: Your height in inches multiplied by 0.415 equals your stride length */

/* Calories Burned = #steps * .04 * BF * AF * SF

Where BF, AF, and SF are the bmi, age, and speed factor. */

/* 0.57 x peso = CaloriasPorMilha
CaloriasporMilha / altura*0.413 F ou *0.415 M = calorias por passo */

const styles = StyleSheet.create({
    contentHolder: {
        flex: 1,
        padding: 15,
        marginTop: 30,
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
    formInput: {
        height: 40,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
    },
    formGenderPicker: {
        flexDirection: "row",
        justifyContent: "space-around",

    },
    formGender: {
        backgroundColor: '#e3e3e3',
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formGenderSelected: {
        backgroundColor: '#e3e3e3',
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#343434'
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
        fontWeight: 'bold'
    }
});


export default RegisterData