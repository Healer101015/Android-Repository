import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function ConversionCalculatorScreen() {
  const [celsius, setCelsius] = useState('');
  const [kmh, setKmh] = useState('');

  // Função para converter ºC para ºF
  const convertCelsiusToFahrenheit = (celsius) => {
    return (celsius * 9/5 + 32).toFixed(4);
  };

  // Função para converter km/h para mph
  const convertKmhToMph = (kmh) => {
    return (kmh / 1.609).toFixed(4);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Conversão</Text>

      {/* Conversão de Temperatura */}
      <Text style={styles.label}>Temperatura (ºC para ºF):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite a temperatura em ºC"
        value={celsius}
        onChangeText={setCelsius}
      />
      {celsius !== '' && (
        <Text style={styles.result}>
          {celsius} ºC = {convertCelsiusToFahrenheit(celsius)} ºF
        </Text>
      )}

      {/* Conversão de Velocidade */}
      <Text style={styles.label}>Velocidade (km/h para mph):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite a velocidade em km/h"
        value={kmh}
        onChangeText={setKmh}
      />
      {kmh !== '' && (
        <Text style={styles.result}>
          {kmh} km/h = {convertKmhToMph(kmh)} mph
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 18,
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
