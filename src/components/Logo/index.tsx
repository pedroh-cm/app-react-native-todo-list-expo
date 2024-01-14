import { View, Image } from "react-native";

import { styles } from "./styles";

export function Logo() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/logo.png')} 
        style={styles.logo}
      />
    </View>
  )
}