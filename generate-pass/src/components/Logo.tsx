import React from "react";
import { Text, Image } from "react-native";

import Logo from "../../assets/image/olho.png";
import { styles } from "./LogoStyles";

export function LogoComponent() {
  return (
    <>
      <Text style={styles.title}>Pass Generator</Text>
      <Image source={Logo} style={{ resizeMode: "contain", height: 180 }} />
    </>
  );
}