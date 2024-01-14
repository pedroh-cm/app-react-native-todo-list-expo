import { useState } from "react";
import { Alert, View } from "react-native";

import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Tasks } from "../../components/Tasks";

import { styles } from "./styles";

export function Home() {
  const [tasksConcluded, setTasksConcluded] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);

  function handleAddTask() {
    if (!inputValue.trim()) {
      return Alert.alert('Valor inválido', 'Por favor, digite uma tarefa');
    }

    if (tasks.includes(inputValue)) {
      return Alert.alert('Tarefa já existente', 'Por favor, digite uma tarefa diferente', [
        {
          text: 'Ok',
          style: 'default',
          onPress: () => setInputValue('')
        }
      ]);
    }

    setTasks(prevState => [...prevState, inputValue]);
    setInputValue('');
  }

  function handleConcludedTask(taskChecked: boolean) {
    if (taskChecked) {
      setTasksConcluded(tasksConcluded + 1);
    } else {
      setTasksConcluded(tasksConcluded - 1);
    }
  }

  function handleDeleteTask(taskToDelete: string) {
    return Alert.alert(
      'Deletar Tarefa',
      'Tem certeza que deseja deletar esta tarefa?',
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Deletar',
          onPress: () => {
            setTasks(prevState => prevState.filter(task => task !== taskToDelete))
          },
          style: 'destructive'
        }
      ]
    )
  }


  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Logo />
        <Input  
          onAddTask={handleAddTask}
          value={inputValue}
          setValue={setInputValue}
          tasks={tasks}
        /> 
      </View>
      <Tasks 
        tasksConcluded={tasksConcluded}
        tasks={tasks}
        handleConcludedTask={handleConcludedTask}
        handleDeleteTask={handleDeleteTask}
      />
    </View>
  );
}