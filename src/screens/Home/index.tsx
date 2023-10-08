import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function Home() {

  function handleParticipantAdd() {
    console.log("Você clicou no botão de Adicionar!")
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Domingo, 1 de Outubro de 2023.</Text>

      <TextInput 
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor={"#6B6B6B"}
        keyboardType={"email-address"}
      />

      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}> + </Text>
      </TouchableOpacity>
    </View>
  );
}
