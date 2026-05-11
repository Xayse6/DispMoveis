import React from 'react';
import { TextInput } from 'react-native';
 
import { styles } from './PassTextInputStyles';
 
export function TextInputComponents() {
  return (
    <TextInput
        style={styles.InputerContainer}
        placeholder='Senha'
    />
  );
}

