import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    gap: 8,
    marginTop: 20,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: theme.colors.GRAY_500,
    paddingVertical: 12,
    paddingRight: 8,
    paddingLeft: 12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  checkbox: {
    borderRadius: 999,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: theme.colors.GRAY_100,
    width: 235,
    textAlign: 'left',
  },
  textDone: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: theme.colors.GRAY_300,
    width: 235,
    textAlign: 'left',
    textDecorationLine: 'line-through'
  }
})