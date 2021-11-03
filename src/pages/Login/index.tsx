

import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, TextInput, Text, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
//Importar a biblioteca do axios
//import axios from "axios";
import { createNativeStackNavigator } from '@react-navigation/native-stack';




const navigation = NavigationContainer();
//Importar a biblioteca do axios
import axios from "axios";
import Home from "../TelaHome";



function TelaLogin({ navigation }) {

    //Variaveis que irão receber os dados dos campos de texto
    let [usuario, setUsuario] = useState('');
    let [senha, setSenha] = useState('');




    //Criar a funcão de EfetuaLogin
    async function efetuaLogin() {

        if (usuario.length == 0 || senha.length == 0) {
            alert("Preencha todos os ete!");
        }
        else {
            //Efetua Login
            //http://localhost/api-produtos/cadastrar-produtos.php
            let url = "http://192.168.0.107/api-produtos/login.php";

            axios.post(url, {
                usuario: usuario,
                senha: senha

            })
                .then(function (response) {
                    alert("Login efetuado com sucesso!");
                    
                    if (response.data == 'Logado com sucesso!') {

                        //Salvar o id do usuario no AsyncStorage (dentro celular)
                        //navigation.navigate({'Home'});
                    }
                })
                .catch(function (error) {
                    console.log(error.data);
                });
        }

    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela de Login</Text>

            <TextInput onChangeText={(valor) => setUsuario(valor)} style={styles.TextInput} placeholder="Usuário" />
            <TextInput onChangeText={(valor) => setSenha(valor)} style={styles.TextInput} placeholder="Senha" />


            <Button title="Go to Home" onPress={() => navigation.navigate('')} />



            <TouchableOpacity onPress={efetuaLogin} style={styles.button}>
                <Text style={styles.buttonText}>LOGAR</Text>
            </TouchableOpacity>
        </View>
    );

}

export default TelaLogin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginTop: 20,
        fontWeight: 'bold',
        color: '#808080'
    },

    subTitle: {
        fontSize: 16,
        marginTop: 5,
        fontWeight: "300",
        color: '#808080'
    },

    TextInput: {
        width: 300,
        marginTop: 80,
        marginBottom: 10,
        padding: 5,
        fontSize: 15,
        borderBottomColor: '#9AE0FF',
        borderBottomWidth: 2
    },

    button: {
        width: 200,
        height: 50,
        backgroundColor: '#9AE0FF',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10
    },

    buttonText: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold'
    }

});