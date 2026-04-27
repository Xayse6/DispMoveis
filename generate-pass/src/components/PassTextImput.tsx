import React from "react";
import{TextInput} from "react-native";


import {styles} from "./PassTextImputStyles";

export function TextInputComponents(){
    return(
        <TextInput 
            style={styles.inputerConteiner}
            placeholder="senha"
        />
    );
}