import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Result from "./Result";

const Stack = createNativeStackNavigator();

export default function Home({ navigation }) {

    const [quilometragem, setQuilometragem] = useState("");
    const [litros, setLitros] = useState("");
    const [error, setError] = useState(false);

    const validateInputs = () => {
        if (!quilometragem || isNaN(quilometragem) || quilometragem <= 0 || 
            !litros || isNaN(litros) || litros <= 0) {
            setError(true);
        } else {
            setError(false);
            navigation.navigate("Result", { quilometragem: quilometragem, listros: litros });
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>Calcula Consumo</Text>
            <Text style={styles.mainSubText}>Calcule a média de consumo de seu veículo.</Text>
            <StatusBar style="auto" />

            <View style={styles.container2}>
                <Text style={styles.inputText}>Informe a quilometragem (KM) percorrida: </Text>
                <TextInput 
                    style={styles.input}
                    keyboardType="numeric"
                    onChangeText={setQuilometragem}
                    placeholder="Quilometragem percorrida pelo veículo"
                    value={quilometragem}
                />

                <Text style={styles.inputText}>Informe a quantidade de litros consumidos: </Text>
                <TextInput 
                    style={styles.input}
                    keyboardType="numeric"
                    onChangeText={setLitros}
                    placeholder="Litros consumidos"
                    value={litros}
                />

                <TouchableOpacity style={styles.button} onPress={validateInputs}>
                    <Text style={styles.textButton}>Calcular</Text>
                </TouchableOpacity>

                {error && <Text style={styles.errorText}>Campos inválidos.</Text>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: "2%",
        flex: 1,
        backgroundColor: '#aaa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        flex: 0.7,
        backgroundColor: '#aaa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainTitle:{
        color: "purple",
        fontSize: 50,

    },
    mainSubText:{
        fontSize: 15,
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 40,
    },

    input: {
        marginTop: 40,
        marginBottom: 20,
        borderWidth: 1,
        padding: 12,
        borderRadius: 15,
        //elevation: "50%",
        backgroundColor: "white",
        borderColor: "purple",
    },

    inputText:{
        marginTop:50,
        fontSize:30,
        textAlign: 'center',
    },

    border:{
        borderWidth:1,
        padding:20,
    },

    button:{
        padding:10,
        backgroundColor: "purple",
        borderRadius:10,
        //elevation: "50%",
        marginTop: 30,
    },

    textButton:{
        fontSize: 20,
        color: "white",
    },

    errorText: {
        color: 'red',
        marginTop: 20,
        fontSize: 16,
        backgroundColor: "white",
    },
});





///aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa