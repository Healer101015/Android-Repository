import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, BackHandler, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function BirthDateScreen() {
  const [dateOfBirth, setDateOfBirth] = useState(new Date(1930, 0, 1)); // Data inicial
  const [showPicker, setShowPicker] = useState(false);
  const [ageInYears, setAgeInYears] = useState(null);
  const [ageInMonths, setAgeInMonths] = useState(null);
  const [ageInDays, setAgeInDays] = useState(null);
  const [category, setCategory] = useState('');

  // Formatar a data
  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // meses de 0 a 11
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Calcular a idade e definir a categoria
  const calculateAge = () => {
    const currentDate = new Date();

    let years = currentDate.getFullYear() - dateOfBirth.getFullYear();
    let months = currentDate.getMonth() - dateOfBirth.getMonth();
    let days = currentDate.getDate() - dateOfBirth.getDate();

    if (days < 0) {
      months -= 1;
      days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setAgeInYears(years);
    setAgeInMonths(months + (years * 12));
    setAgeInDays(Math.floor((currentDate - dateOfBirth) / (1000 * 60 * 60 * 24)));

    if (years <= 19) {
      setCategory('Jovem');
    } else if (years >= 20 && years <= 59) {
      setCategory('Adulto');
    } else {
      setCategory('Idoso');
    }
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dateOfBirth;
    setShowPicker(false); // Fechar o picker
    setDateOfBirth(currentDate);
  };

  // Lidar com o botão de voltar
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Sair', 'Tem certeza de que deseja sair?', [
        {
          text: 'Cancelar',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'Sair',
          onPress: () => BackHandler.exitApp(),
        },
      ]);
      return true; // Para impedir a ação padrão do botão de voltar
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove(); // Remover o listener ao desmontar o componente
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Idade</Text>

      <TouchableOpacity style={styles.dateButton} onPress={() => setShowPicker(true)}>
        <Text style={styles.dateButtonText}>
          {formatDate(dateOfBirth)}
        </Text>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={dateOfBirth}
          mode="date"
          display="default"
          onChange={onDateChange}
          maximumDate={new Date()} // Impede a seleção de datas futuras
          minimumDate={new Date(1900, 0, 1)} // Limite de 1900
        />
      )}

      <TouchableOpacity style={styles.button} onPress={calculateAge}>
        <Text style={styles.buttonText}>Calcular Idade</Text>
      </TouchableOpacity>

      {ageInYears !== null && (
        <View style={styles.result}>
          <Text style={styles.resultText}>Idade em Anos: {ageInYears}</Text>
          <Text style={styles.resultText}>Idade em Meses: {ageInMonths}</Text>
          <Text style={styles.resultText}>Idade em Dias: {ageInDays}</Text>
          <Text style={styles.resultText}>Categoria: {category}</Text>
        </View>
      )}
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dateButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#6c757d',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  dateButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  result: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    marginBottom: 5,
  },
});
