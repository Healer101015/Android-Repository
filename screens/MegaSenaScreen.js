import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function MegaSenaScreen({ navigation }) {
  const [userNumbers, setUserNumbers] = useState(Array(6).fill('')); // Números inseridos pelo usuário
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (value, index) => {
    const newNumbers = [...userNumbers];
    newNumbers[index] = value;
    setUserNumbers(newNumbers);
  };

  // Função para gerar números aleatórios da Mega-Sena
  const generateRandomNumbers = () => {
    let randomNumbers = [];
    while (randomNumbers.length < 6) {
      const num = Math.floor(Math.random() * 60) + 1;
      if (!randomNumbers.includes(num)) {
        randomNumbers.push(num);
      }
    }
    return randomNumbers;
  };

  // Função para verificar os resultados
  const checkResults = (userNumbers, randomNumbers) => {
    const matchedNumbers = userNumbers.filter(num => randomNumbers.includes(num));
    return {
      matchedNumbers,
      isWinner: matchedNumbers.length === 6,
    };
  };

  const handleGenerate = () => {
    const parsedUserNumbers = userNumbers.map(Number).filter(n => !isNaN(n) && n >= 1 && n <= 60);

    if (parsedUserNumbers.length !== 6 || new Set(parsedUserNumbers).size !== 6) {
      setError('Insira 6 números válidos entre 1 e 60, sem repetir!');
      return;
    }

    const generatedNumbers = generateRandomNumbers();
    setRandomNumbers(generatedNumbers);
    const result = checkResults(parsedUserNumbers, generatedNumbers);
    setResult(result);
    setError('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Mega-Sena</Text>
      <View style={styles.inputContainer}>
        {userNumbers.map((num, index) => (
          <TextInput
            key={index}
            value={num}
            onChangeText={(value) => handleInputChange(value, index)}
            style={styles.input}
            keyboardType="numeric"
            placeholder={`Nº ${index + 1}`}
            maxLength={2}
          />
        ))}
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Gerar Números" onPress={handleGenerate} color="#27ae60" />
      {randomNumbers.length > 0 && (
        <View style={styles.resultsContainer}>
          <Text style={styles.resultText}>
            Números sorteados: {randomNumbers.join(', ')}
          </Text>
          <Text style={styles.resultText}>
            Seus números: {userNumbers.join(', ')}
          </Text>
          <Text style={styles.resultText}>
            Números acertados: {result?.matchedNumbers.join(', ')}
          </Text>
          {result?.isWinner ? (
            <Text style={styles.winnerText}>Parabéns! Você ganhou!</Text>
          ) : (
            <Text style={styles.tryAgainText}>Não foi dessa vez. Tente novamente!</Text>
          )}
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    width: 50,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  resultsContainer: {
    marginTop: 20,
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  resultText: {
    fontSize: 16,
    color: '#2c3e50',
    marginBottom: 10,
  },
  winnerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#27ae60',
  },
  tryAgainText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e74c3c',
  },
  error: {
    color: '#e74c3c',
    marginBottom: 10,
  },
});
