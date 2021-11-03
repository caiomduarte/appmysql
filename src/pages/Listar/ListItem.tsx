import React from "react";

import {View, StyleSheet, Text} from "react-native";


interface Produtos {
    id: number;
    nome: string;
    qtd: number;
    preco: number;

}


function ListItem(produtos: Produtos) {
    return (
        <View style={styles.card}>
            <Text style={styles.cardContent}>{produtos.nome}</Text>
        </View>
    );
}

export default ListItem;

const styles = StyleSheet.create({
    card:{
        borderRadius:6,
        elevation:3,
        backgroundColor:'#FFF',
        shadowOffset: {width:1,height:1},
        shadowColor: '#333',
        shadowRadius: 2,
        marginHorizontal:4,
        marginVertical:6
    },

    cardContent:{
        marginHorizontal:18,
        marginVertical:10
    }
});