import { StyleSheet } from "react-native";

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
    backgroundColor: '#262626',
    borderRadius: 6,
    padding: 16,
    color: '#F2F2F2',
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    width: '100%',
  },
  inputFocused: {
   borderStyle: 'solid',
   borderWidth: 1,
   borderTopColor: '#5E60CE',
   borderBottomColor: '#5E60CE',
   borderLeftColor: '#5E60CE',
   borderRightColor: '#5E60CE',
   width: '100%',
  },
  button: {
    width: 52,
    height: 52,
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },
  buttonPressed: {
    backgroundColor: '#4EA8DE',
    width: 52,
    height: 52,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  }
})