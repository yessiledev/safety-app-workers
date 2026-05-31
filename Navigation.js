import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import ChecklistScreen from '../screens/ChecklistScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Accueil" 
          component={HomeScreen} 
          options={{ title: "Poste du jour" }}
        />
        <Stack.Screen 
          name="Checklist" 
          component={ChecklistScreen} 
          options={{ title: "Check‑list sécurité" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
