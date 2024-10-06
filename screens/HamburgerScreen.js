import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

export default function HamburgerScreen() {
  const hamburgers = [
    { id: '1', name: 'Cheeseburger', price: 'R$ 10,00', image: 'https://cdn-icons-png.flaticon.com/512/1261/1261134.png' },
    { id: '2', name: 'Bacon Burger', price: 'R$ 12,00', image: 'https://cdn-icons-png.flaticon.com/512/1261/1261134.png' },
    // Adicione mais hamburgers conforme necessário
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hamburgers</Text>
      <FlatList
        data={hamburgers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemName: {
    fontSize: 18,
    flex: 1,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
