import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const  styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 48
  },
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Inter_700Bold',
    color: theme.colors.GRAY_300
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: theme.colors.GRAY_300,
    textAlign: 'center'
  }
})