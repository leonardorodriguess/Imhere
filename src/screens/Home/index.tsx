import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';
import React from 'react';

export default function Home() {
  const participants = [
    'Leonardo',
    'Rodrigo',
    'Vini',
    'Diego',
    'Biro',
    'Ana',
    'Isa',
    'Jack',
    'Maicon',
    'João',
  ];

  function handleParticipantAdd() {
    console.log('Você clicou no botão de Adicionar!');
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou em remover o participante ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Domingo, 1 de Outubro de 2023.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={'#6B6B6B'}
          keyboardType={'email-address'}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
          />
        ))}
      </ScrollView>
    </View>
  );
}
