import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, TextInput, Text, StatusBar } from "react-native";

import ListItem from "./ListItem";

interface Produtos {
    id: number;
    nome: string;
    qtd: number;
    preco: number;

}


function Listar() {

    const [produtos, setProdutos] = useState<Produtos[]>([]);

    useEffect(() => {

        async function listarProdutos() {
            const response = await axios.get('http://192.168.0.107/api-produtos/listar-produtos.php');
            // console.log(response.data);
            setProdutos(response.data);

        }

        listarProdutos();

    }, []);

    return (
        <>
            <StatusBar />
            <FlatList data={produtos} renderItem={({item})=>{
                return(
                     <Text style={{fontSize:60}}>{item.nome}</Text>
                );
            }}/>
    
        </>
    )
}

export default Listar;

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

    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#FFF',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6
    },

    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10
    }

});