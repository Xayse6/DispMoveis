// rnbc
import React from "react";
import{View,Text, Image} from "react-native";

import {Logo} from "../..";
import {Style} from "./LogoStyles";
export function components(){
    return(
            <>
        <Text>Logo</Text>
        <Image source={Logo} Styl={{rizeMode="contain", height:180}})}
     </>
    );
}