import { StyleSheet } from "react-native";

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
    color: '#4EA8DE',
    fontSize: 14,
    fontFamily: "Inter_700Bold"
  },
  concluded: {
    color: '#8284FA',
    fontSize: 14,
    fontFamily: "Inter_700Bold"
  },
  wrapperCounter: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: '#333333',
    borderRadius: 999,
  },
  counter: {
    color: '#D9D9D9',
    fontSize: 14,
    fontFamily: "Inter_700Bold"
  }
})