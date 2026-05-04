import React from "react";
import{TextInputComponent, View} from "react-native";

import {styles} from "./HomeStyles";
import {LogoComponent} from "../../components/Logo/Logo";
import {TextInputComponents} from "../../components/PassTextInput/PassTextImput"
import { StatusBar } from "expo-status-bar";
import { PassButton } from "../../components/PassButton/PassButton";

export function Home(){
    return(
        <View style={styles.appContainer}>

            <View style={styles.logoContainer}>
                <LogoComponent/>

        </View>
        <View style={styles.inputContainer  }>
            <TextInputComponents/>
            <PassButton/>
        </View>
            <StatusBar style="dark"/>
        </View>
    );
}