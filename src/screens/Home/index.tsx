import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
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
    if (participants.includes('Leonardo')) {
      return Alert.alert(
        'Participante Existe',
        'Já existe um participante na lista '
      );
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Remover o participnate ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!'),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);

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

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={handleParticipantRemove}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
}
