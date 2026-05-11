import React from 'react';
import { View } from 'react-native';

import { styles } from './HomeStyles';
import { LogoComponent } from '../../components/Logo/Logo';
import { TextInputComponents } from '../../components/PassTextInput/PassTextInput';
import { StatusBar } from 'expo-status-bar';
import { PassButton } from '../../components/PassButton/PassButton';


export function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
      <LogoComponent/>
    </View>

      <View style={styles.InputContainer}>
        <TextInputComponents/>
        <PassButton/>
      </View>


      <StatusBar style="auto" />
    </View>
  );
}