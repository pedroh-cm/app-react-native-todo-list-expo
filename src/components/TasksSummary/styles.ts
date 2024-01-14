import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  wrapperCounterTasks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tasksCreated: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  created: {
    color: theme.colors.BLUE_LIGHT,
    fontSize: 14,
    fontFamily: "Inter_700Bold"
  },
  concluded: {
    color: theme.colors.PURPLE_DARK,
    fontSize: 14,
    fontFamily: "Inter_700Bold"
  },
  wrapperCounter: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: theme.colors.GRAY_400,
    borderRadius: 999,
  },
  counter: {
    color: theme.colors.GRAY_200,
    fontSize: 14,
    fontFamily: "Inter_700Bold"
  }
})