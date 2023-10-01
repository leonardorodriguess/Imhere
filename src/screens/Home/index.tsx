import { View, Text } from "react-native";
import { styles } from "./styles";

export default function Home() {
  return (
    <View
      style={styles.container}
    >
      <Text
        style={styles.eventName}
      >
        Nome do Evento
      </Text>

      <Text style={styles.eventDate}>
        Domingo, 1 de Outubro de 2023.
      </Text>
    </View>
  );
}