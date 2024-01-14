import { StyleSheet } from "react-native";

export const  styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 48
  },
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16
  },
  title: {
    fontSize: 14,
    fontFamily: 'Inter_700Bold',
    color: '#808080'
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#808080',
    textAlign: 'center'
  }
})