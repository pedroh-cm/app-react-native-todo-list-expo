import { FlatList, View } from "react-native";

import { TasksSummary } from "../TasksSummary";
import { Divider } from "../Divider";
import { TasksEmpty } from "../TasksEmpty";
import { TasksList } from "../TasksList";

import { styles } from "./styles";

type Props = {
  tasksCreated: number;
  tasksConcluded: number;
  tasks: string[];
  handleConcludedTask: (taskChecked: boolean) => void; 
  handleDeleteTask: (taskToDelete: string) => void;
}

export function Tasks({ tasksCreated, tasksConcluded, tasks, handleConcludedTask, handleDeleteTask }: Props) {
  return (
    <View style={styles.container}>
      <TasksSummary tasksConcluded={tasksConcluded} tasksCreated={tasksCreated}/>
      <Divider />
      <FlatList 
        data={tasks}
        keyExtractor={item => item}
        ListEmptyComponent={() => <TasksEmpty />}
        renderItem={({ item }) => <TasksList task={item} handleConcludedTask={handleConcludedTask} handleDeleteTask={handleDeleteTask} />}
      />
    </View>
  )
}