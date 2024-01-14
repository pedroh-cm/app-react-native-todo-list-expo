import { memo } from "react";
import { Image, Text, View } from "react-native";

import { styles } from "./styles";

function TasksEmpty() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={require('../../assets/images/clipboard.png')} />
        <View>
          <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
          <Text style={styles.subtitle}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
      </View>
    </View>
  )
}

export const TasksEmptyMemo = memo(TasksEmpty)