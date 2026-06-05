import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Écrans
import Dashboard from './src/screens/Dashboard';
import ModeJeuneRecrueIntro from './src/screens/ModeJeuneRecrueIntro';
import ModeJeuneRecrueEtape1 from './src/screens/ModeJeuneRecrueEtape1';
import ModeJeuneRecrueEtape2 from './src/screens/ModeJeuneRecrueEtape2';
import ModeJeuneRecrueEtape3 from './src/screens/ModeJeuneRecrueEtape3';
import ModeJeuneRecrueEtape4 from './src/screens/ModeJeuneRecrueEtape4';
import ModeJeuneRecrueEtape5 from './src/screens/ModeJeuneRecrueEtape5';

import AssistantIA from './src/screens/AssistantIA';
import SignalerDanger from './src/screens/SignalerDanger';
import AccueilJeunesScreen from './src/screens/AccueilJeunesScreen';
import ChecklistScreen from './src/screens/ChecklistScreen';
import FicheMetierScreen from './src/screens/JobScreen';
import HistoriqueDangersScreen from './src/screens/HistoriqueDangersScreen';
import ProceduresScreen from './src/screens/ProceduresScreen';
import FormationScreen from './src/screens/FormationScreen';
import ConsignesSiteScreen from './src/screens/ConsignsSiteScreen';
import EPIScreen from './src/screens/EpiScreen';
import AccidentScreen from './src/screens/AccidentScreen';
import SituationsDangereusesScreen from './src/screens/SituationsDangereusesScreen';
import CirculationScreen from './src/screens/CirculationScreen';
import RisquesChimiquesScreen from './src/screens/RisquesChimiquesScreen';
import RisqueIncendieScreen from './src/screens/RisqueIncendieScreen';
import PremiersSecoursScreen from './src/screens/PremiersSecoursScreen';
import ManutentionScreen from './src/screens/ManutentionScreen';
import TravailHauteurScreen from './src/screens/TravailHauteurScreen';
import AmbiancesSonoresScreen from './src/screens/AmbiancesSonoresScreen';
import AmbiancesThermiquesScreen from './src/screens/AmbiancesThermiquesScreen';
import ProduitsDangereuxScreen from './src/screens/ProduitsDangereuxScreen';
import EquipementsTravailScreen from './src/screens/ÉquipementsTravailScreen';
import ZonesInterditesScreen from './src/screens/ZonesInterditesScreen';
import ConduiteEnginsScreen from './src/screens/ConduitEnginsScreen';
import TravailIsoleScreen from './src/screens/TravailIsoleScreen';

const Stack = createStackNavigator();

export default function App() {
  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      const alreadyLaunched = await AsyncStorage.getItem('alreadyLaunched');

      if (alreadyLaunched === null) {
        await AsyncStorage.setItem('alreadyLaunched', 'true');
        setInitialRoute('ModeJeuneRecrueIntro'); 
      } else {
        setInitialRoute('Dashboard');
      }
    };

    checkFirstLaunch();
  }, []);

  if (!initialRoute) return null; // évite un flash blanc

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>

        {/* Dashboard */}
        <Stack.Screen 
          name="Dashboard" 
          component={Dashboard} 
          options={{ title: "Accueil" }}
        />

        {/* Mode Jeune Recrue */}
        <Stack.Screen 
          name="ModeJeuneRecrueIntro" 
          component={ModeJeuneRecrueIntro} 
          options={{ title: "Mode Jeune Recrue" }}
        />
        <Stack.Screen name="ModeJeuneRecrueEtape1" component={ModeJeuneRecrueEtape1} options={{ title: "Étape 1" }} />
        <Stack.Screen name="ModeJeuneRecrueEtape2" component={ModeJeuneRecrueEtape2} options={{ title: "Étape 2" }} />
        <Stack.Screen name="ModeJeuneRecrueEtape3" component={ModeJeuneRecrueEtape3} options={{ title: "Étape 3" }} />
        <Stack.Screen name="ModeJeuneRecrueEtape4" component={ModeJeuneRecrueEtape4} options={{ title: "Étape 4" }} />
        <Stack.Screen name="ModeJeuneRecrueEtape5" component={ModeJeuneRecrueEtape5} options={{ title: "Étape 5" }} />

        {/* Autres écrans */}
        <Stack.Screen name="AssistantIA" component={AssistantIA} options={{ title: "Assistant IA" }} />
        <Stack.Screen name="SignalerDanger" component={SignalerDanger} options={{ title: "Signaler un danger" }} />
        <Stack.Screen name="AccueilJeunes" component={AccueilJeunesScreen} options={{ title: "Ta vie avant tout" }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
