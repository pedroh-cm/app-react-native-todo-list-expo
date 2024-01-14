import { useEffect, useState } from "react";
import { TextInput, TouchableOpacity, View, Image } from "react-native";

import { styles } from "./styles";

type Props = {
  onAddTask: (task: string) => void;
  value: string;
  setValue: (value: string) => void;
  tasks: string[];
}

export function Input({ onAddTask, value, setValue, tasks }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [buttonIsPressed, setButtonIsPressed] = useState(false);

  useEffect(() => {
    if (tasks.length === 0) {
      setButtonIsPressed(false);
    }
  }, [tasks])

  return (
    <View style={styles.container}>
        <TextInput 
          style={[styles.input, isFocused && styles.inputFocused]}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          keyboardType="default"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={value}
          onChangeText={setValue}
        />
      <TouchableOpacity style={buttonIsPressed ? styles.buttonPressed : styles.button} onPress={() => onAddTask(value)} >
        <Image source={require('../../assets/images/plus.png')} />
      </TouchableOpacity>
    </View>
  )
}