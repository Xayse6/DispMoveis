import React from 'react';
import { Text, Image } from 'react-native';

import styles from './LogoStyles';
import Logo from '../../../assets/logoBk.png';

export function LogoComponent() {
  return (
    <>
      <Text style={styles.title}>Hamburgão do Zé</Text>
      <Image source={Logo} style={{ resizeMode: 'contain', height: 100 }} />
    </>
  );
}