import React from "react";
import{View,Text, Image} from "react-native";

import {Logo} from "../../assets/image/olho.png";
import {styles} from "./LogoStyles";

export function LogoComponent(){
  console.log("Entri no App");  
  return(
    <>
    <Text style={styles.title}>Pass Generator</Text>
    <Image source={Logo} style={{resizeMode:"contain", height:180}}/>
    </>
    );
}