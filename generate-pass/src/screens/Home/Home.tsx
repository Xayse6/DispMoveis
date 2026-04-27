import React from "react";
import{TextInputComponent, View} from "react-native";

import {styles} from "./HomeStyles";
import {LogoComponent} from "../../components/Logo";
import {TextInputComponents} from "../../components/PassTextImput"

export function Home(){
    return(
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <LogoComponent/>
        </View>
        <View>
            <TextInputComponents/>
        </View>
        </View>
    );
}