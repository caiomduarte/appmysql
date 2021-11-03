

import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, TextInput, Text } from "react-native";

//Importar a biblioteca do axios
import axios from "axios";



function TelaCadastro() {

    //Variaveis que irão receber os dados dos campos de texto
    let [descricao, setDesc] = useState('');
    let [qtd, setQtd]        = useState(0);
    let [preco, setPreco]    = useState(0);


    //Criar a funcão de cadastro
    async function CadastrarProduto(){
        
        if (descricao.length == 0 || qtd.toString.length == 0 || preco.toString.length == 0) {
            alert("Preencha todos os campos!");
        }
        else{
            //Cadastrar no banco de dados
                     //http://localhost/api-produtos/cadastrar-produtos.php
            let url = "http://192.168.0.107/api-produtos/cadastrar-produtos.php";

            axios.post(url, {
                descricao: descricao,
                qtd: qtd,
                preco: preco
              })
              .then(function (response) {
                alert("Produto Cadastrado com sucesso!");               
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }

        
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Produtos</Text>

            <TextInput onChangeText={(valor) => setDesc(valor)} style={styles.TextInput} placeholder="Descrição" />
            <TextInput onChangeText={(valor) => setQtd(parseInt(valor))} style={styles.TextInput} placeholder="Qtd" />
            <TextInput onChangeText={(valor) => setPreco(parseFloat(valor))} style={styles.TextInput} placeholder="Preço" />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );

}

export default TelaCadastro

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