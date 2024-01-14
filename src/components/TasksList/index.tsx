import { useState } from "react";
import Checkbox from 'expo-checkbox';
import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

type Props = {
  task: string;
  handleConcludedTask: (taskChecked: boolean) => void;
  handleDeleteTask: (taskToDelete: string) => void;
}

export function TasksList({ task, handleConcludedTask, handleDeleteTask }: Props) {
  const [isChecked, setChecked] = useState(false);

  function handleChecked(value: boolean) {
    setChecked(value);
    handleConcludedTask(value);
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => handleChecked(!isChecked)} style={styles.checkboxContainer}>
          <Checkbox 
            style={styles.checkbox} 
            value={isChecked} 
            onValueChange={(value) => handleChecked(value)} 
            color={isChecked ? '#5E60CE' : undefined}
          />
          <Text style={isChecked ? styles.textDone : styles.text}>
            {task}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteTask(task)}>
          <Image source={require('../../assets/images/trash.png')} />
        </TouchableOpacity>
      </View>
    </View>
  )
}