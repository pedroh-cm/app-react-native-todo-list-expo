import { FlatList, View } from "react-native";

import { TasksSummary } from "../TasksSummary";
import { Divider } from "../Divider";
import { TasksEmptyMemo } from "../TasksEmpty";
import { TasksList } from "../TasksList";

import { styles } from "./styles";

type Props = {
  tasksConcluded: number;
  tasks: string[];
  handleConcludedTask: (taskChecked: boolean) => void; 
  handleDeleteTask: (taskToDelete: string) => void;
}

export function Tasks({ tasksConcluded, tasks, handleConcludedTask, handleDeleteTask }: Props) {
  return (
    <View style={styles.container}>
      <TasksSummary tasksConcluded={tasksConcluded} tasksCreated={tasks.length}/>
      <Divider />
      <FlatList 
        data={tasks}
        keyExtractor={item => item}
        ListEmptyComponent={() => <TasksEmptyMemo />}
        renderItem={({ item }) => <TasksList task={item} handleConcludedTask={handleConcludedTask} handleDeleteTask={handleDeleteTask} />}
      />
    </View>
  )
}