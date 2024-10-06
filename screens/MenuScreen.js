import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const MenuScreen = ({ navigation }) => {
  return (
    <ImageBackground 
      source={{ uri: 'https://img.freepik.com/fotos-premium/fundo-desfocado-do-interior-de-um-bar-de-restaurante-com-uma-mesa-de-madeira-vertical-mobile-wallpaper_892776-5202.jpg' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Menu de Alimentos</Text>
        <View style={styles.buttonContainer}>
          <Button 
            title="Drinks" 
            onPress={() => navigation.navigate('Drinks')} 
            color="#f39c12"
          />
          <Button 
            title="Hamburgers" 
            onPress={() => navigation.navigate('Hamburgers')} 
            color="#e74c3c"
          />
          <Button 
            title="Pizzas" 
            onPress={() => navigation.navigate('Pizzas')} 
            color="#3498db"
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // semi-transparent background for better text visibility
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%', // Ensures buttons take full width
    marginTop: 10,
  },
});

export default MenuScreen;
