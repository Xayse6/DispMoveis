import React from "react";
import{Button, Pressable, Text, View} from "react-native";


import {styles} from "./PassButtonStyles";

export function PassButton(){
    return(
        <View style={styles.buttonConteiner}>
            <Pressable
                onPress={()=> {console.log("Clique aqui")}}
                style={styles.button}
            >
                <Text style={styles.Text}>Gerar Senha</Text>
            </Pressable>
            <Pressable
                onPress={()=> {console.log("Senha copiada")}}
                style={styles.button}
            >
                <Text style={styles.Text}>Copiar Senha</Text>
            </Pressable>
        </View>
    );
}