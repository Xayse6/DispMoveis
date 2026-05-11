import React from 'react';
import { Button, Pressable, View, Text } from 'react-native';

import { styles } from './PassButtonStyles';

export function PassButton() {
  return (
    <View style={styles.ButtonContainer}>

        <Pressable
            onPress={() => {console.log("Fui pressionado!")}}
            style={styles.button}
        >
            <Text style={styles.Text}>GERAR SENHA</Text>
        </Pressable>
        <Pressable
            onPress={() => {console.log("Senha Copiada!")}}
            style={styles.button}
        >
            <Text style={styles.Text}>COPIAR</Text>
        </Pressable>

    </View>
  );
}