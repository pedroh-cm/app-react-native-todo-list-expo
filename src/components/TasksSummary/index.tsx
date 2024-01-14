import { Text, View } from "react-native";

import { styles } from "./styles";

type Props = {
  tasksCreated: number;
  tasksConcluded: number;
}

export function TasksSummary({ tasksCreated, tasksConcluded }: Props) {
  return (
    <View style={styles.wrapperCounterTasks}>
      <View style={styles.tasksCreated}>
        <Text style={styles.created}>Tarefas criadas</Text>
        <View style={styles.wrapperCounter}>
          <Text style={styles.counter}>{tasksCreated}</Text>
        </View>
      </View>
      <View style={styles.tasksCreated}>
        <Text style={styles.concluded}>Concluídas</Text>
        <View style={styles.wrapperCounter}>
          <Text style={styles.counter}>{tasksConcluded}</Text>
        </View>
      </View>
    </View>
  )
}