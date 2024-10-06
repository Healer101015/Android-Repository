import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

// Importando as telas dos mini projetos
import BirthDateScreen from './screens/BirthDateScreen';
import ConversionCalculatorScreen from './screens/ConversionCalculatorScreen';
import InvitationScreen from './screens/InvitationScreen';
import MegaSenaScreen from './screens/MegaSenaScreen';
import MenuScreen from './screens/MenuScreen';
import DrinksScreen from './screens/DrinksScreen';
import HamburgerScreen from './screens/HamburgerScreen';
import PizzaScreen from './screens/PizzaScreen';
import PeopleScreen from './screens/PeopleScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack para a tela de convite
function InvitationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Convite" component={InvitationScreen} />
      <Stack.Screen name="People" component={PeopleScreen} />
    </Stack.Navigator>
  );
}

// Stack para o menu de alimentos
function FoodMenuStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu de Comida" component={MenuScreen} />
      <Stack.Screen name="Drinks" component={DrinksScreen} />
      <Stack.Screen name="Hamburgers" component={HamburgerScreen} />
      <Stack.Screen name="Pizzas" component={PizzaScreen} />
    </Stack.Navigator>
  );
}

// Nova tela de menu principal para listar os mini projetos
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mini Aplicativos</Text>
    </View>
  );
}

// Navegação principal
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Convite') {
            iconName = focused ? 'mail-open' : 'mail-outline';
          } else if (route.name === 'Mega-Sena') {
            iconName = focused ? 'ticket' : 'ticket-outline';
          } else if (route.name === 'Data de Nascimento') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Calculadora de Conversão') {
            iconName = focused ? 'calculator' : 'calculator-outline';
          } else if (route.name === 'Menu de Comida') {
            iconName = focused ? 'restaurant' : 'restaurant-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
        <Tab.Screen name="Convite" component={InvitationStack} />
        <Tab.Screen name="Mega-Sena" component={MegaSenaScreen} />
        <Tab.Screen name="Data de Nascimento" component={BirthDateScreen} />
        <Tab.Screen name="Calculadora de Conversão" component={ConversionCalculatorScreen} />
        <Tab.Screen name="Menu de Comida" component={FoodMenuStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
