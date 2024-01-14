import { StyleSheet } from "react-native";
import theme  from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    justifyContent: 'center',
    gap: 4,
    position: 'absolute',
    bottom: -20,
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: theme.colors.GRAY_500,
    borderRadius: 6,
    padding: 16,
    color: theme.colors.GRAY_100,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    width: '100%',
  },
  inputFocused: {
   borderStyle: 'solid',
   borderWidth: 1,
   borderTopColor: theme.colors.PURPLE_LIGHT,
   borderBottomColor: theme.colors.PURPLE_LIGHT,
   borderLeftColor: theme.colors.PURPLE_LIGHT,
   borderRightColor: theme.colors.PURPLE_LIGHT,
   width: '100%',
  },
  button: {
    width: 52,
    height: 52,
    backgroundColor: theme.colors.BLUE_DARK,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },
  buttonPressed: {
    backgroundColor: theme.colors.PURPLE_LIGHT,
    width: 52,
    height: 52,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  }
})