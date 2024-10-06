import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function PeopleScreen({ navigation }) {
  const adults = 53;
  const children = 20;
  const elderly = 15;
  const totalPeople = adults + children + elderly;

  return (
    <ImageBackground
      source={{ uri: 'https://w0.peakpx.com/wallpaper/11/949/HD-wallpaper-couple-watching-blue-sky-dark-art-starry-sky-night-silhouette-romantic-blue-sky.jpg' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Contagem de Convidados</Text>
        <View style={styles.row}>
          <FontAwesome name="male" size={30} color="#fff" />
          <Text style={styles.peopleText}>Adultos: {adults}</Text>
        </View>
        <View style={styles.row}>
          <FontAwesome name="child" size={30} color="#fff" />
          <Text style={styles.peopleText}>Crianças: {children}</Text>
        </View>
        <View style={styles.row}>
          <FontAwesome name="wheelchair" size={30} color="#fff" />
          <Text style={styles.peopleText}>Idosos: {elderly}</Text>
        </View>
        <Text style={styles.totalText}>Total de Pessoas: {totalPeople}</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  peopleText: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 10,
  },
  totalText: {
    fontSize: 22,
    color: '#ffcc00',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#ffcc00',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#333',
  },
});
