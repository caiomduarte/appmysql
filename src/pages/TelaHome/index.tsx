import React from "react";
import {View, Text, StyleSheet} from 'react-native';

function Home(){
    return(
        <View>
            <Text>Tela Home</Text>
        </View>
    )

}
export default Home;

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    }
});