import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Função para calcular o countdown
const calculateCountdown = (eventDate) => {
  const now = new Date();
  const difference = new Date(eventDate) - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

export default function InvitationScreen({ navigation }) {
  const [eventDate] = useState('2024-12-31T00:00:00');
  const [countdown, setCountdown] = useState(calculateCountdown(eventDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateCountdown(eventDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <ImageBackground
      source={{ uri: 'https://w0.peakpx.com/wallpaper/11/949/HD-wallpaper-couple-watching-blue-sky-dark-art-starry-sky-night-silhouette-romantic-blue-sky.jpg' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Nosso casamento</Text>
        <Text style={styles.date}>31 de Dezembro de 2024</Text>
        <Text style={styles.timer}>
          {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('People')}>
          <Text style={styles.buttonText}>Contar Convidados</Text>
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
    marginBottom: 10,
  },
  date: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
  },
  timer: {
    fontSize: 24,
    color: '#ffcc00',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#ffcc00',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5, // Adiciona um espaço entre os botões
  },
  buttonText: {
    fontSize: 18,
    color: '#333',
  },
});
