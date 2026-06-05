import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Écrans principaux
import DashboardScreen from './src/screens/DashboardScreen';
import ModeJeuneRecrueIntro from './src/screens/ModeJeuneRecrueIntro';
import ModeJeuneRecrueEtape1 from './src/screens/ModeJeuneRecrueEtape1';
import ModeJeuneRecrueEtape2 from './src/screens/ModeJeuneRecrueEtape2';
import ModeJeuneRecrueEtape3 from './src/screens/ModeJeuneRecrueEtape3';
import ModeJeuneRecrueEtape4 from './src/screens/ModeJeuneRecrueEtape4';
import ModeJeuneRecrueEtape5 from './src/screens/ModeJeuneRecrueEtape5';

import AssistantIAScreen from './src/screens/AssistantIAScreen';
import SignalerDangerScreen from './src/screens/SignalerDangerScreen';
import AccueilJeunesScreen from './src/screens/AccueilJeunesScreen';

// Écrans secondaires (Dashboard)
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

  if (!initialRoute) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>

        {/* Accueil */}
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ title: "Accueil" }} />
        <Stack.Screen name="AccueilJeunes" component={AccueilJeunesScreen} options={{ title: "Ta vie avant tout" }} />

        {/* Mode Jeune Recrue */}
        <Stack.Screen name="ModeJeuneRecrueIntro" component={ModeJeuneRecrueIntro} options={{ title: "Mode Jeune Recrue" }} />
        <Stack.Screen name="ModeJeuneRecrueEtape1" component={ModeJeuneRecrueEtape1} options={{ title: "Étape 1" }} />
        <Stack.Screen name="ModeJeuneRecrueEtape2" component={ModeJeuneRecrueEtape2} options={{ title: "Étape 2" }} />
        <Stack.Screen name="ModeJeuneRecrueEtape3" component={ModeJeuneRecrueEtape3} options={{ title: "Étape 3" }} />
        <Stack.Screen name="ModeJeuneRecrueEtape4" component={ModeJeuneRecrueEtape4} options={{ title: "Étape 4" }} />
        <Stack.Screen name="ModeJeuneRecrueEtape5" component={ModeJeuneRecrueEtape5} options={{ title: "Étape 5" }} />

        {/* Assistant IA */}
        <Stack.Screen name="AssistantIA" component={AssistantIAScreen} options={{ title: "Assistant IA" }} />

        {/* Danger */}
        <Stack.Screen name="SignalerDanger" component={SignalerDangerScreen} options={{ title: "Signaler un danger" }} />
        <Stack.Screen name="HistoriqueDangers" component={HistoriqueDangersScreen} options={{ title: "Historique des dangers" }} />

        {/* Dashboard : toutes les routes */}
        <Stack.Screen name="Checklist" component={ChecklistScreen} options={{ title: "Check‑list" }} />
        <Stack.Screen name="FicheMetier" component={FicheMetierScreen} options={{ title: "Fiche métier" }} />
        <Stack.Screen name="Procedures" component={ProceduresScreen} options={{ title: "Procédures essentielles" }} />
        <Stack.Screen name="Formation" component={FormationScreen} options={{ title: "Formation sécurité" }} />
        <Stack.Screen name="ConsignesSite" component={ConsignesSiteScreen} options={{ title: "Consignes du site" }} />
        <Stack.Screen name="EPI" component={EPIScreen} options={{ title: "EPI obligatoires" }} />
        <Stack.Screen name="Accident" component={AccidentScreen} options={{ title: "Accident du travail" }} />
        <Stack.Screen name="SituationsDangereuses" component={SituationsDangereusesScreen} options={{ title: "Situations dangereuses" }} />
        <Stack.Screen name="Circulation" component={CirculationScreen} options={{ title: "Règles de circulation" }} />
        <Stack.Screen name="RisquesChimiques" component={RisquesChimiquesScreen} options={{ title: "Risques chimiques" }} />
        <Stack.Screen name="RisqueIncendie" component={RisqueIncendieScreen} options={{ title: "Risque incendie" }} />
        <Stack.Screen name="PremiersSecours" component={PremiersSecoursScreen} options={{ title: "Premiers secours" }} />
        <Stack.Screen name="Manutention" component={ManutentionScreen} options={{ title: "Manutention" }} />
        <Stack.Screen name="TravailHauteur" component={TravailHauteurScreen} options={{ title: "Travail en hauteur" }} />
        <Stack.Screen name="AmbiancesSonores" component={AmbiancesSonoresScreen} options={{ title: "Ambiances sonores" }} />
        <Stack.Screen name="AmbiancesThermiques" component={AmbiancesThermiquesScreen} options={{ title: "Ambiances thermiques" }} />
        <Stack.Screen name="ProduitsDangereux" component={ProduitsDangereuxScreen} options={{ title: "Produits dangereux" }} />
        <Stack.Screen name="EquipementsTravail" component={EquipementsTravailScreen} options={{ title: "Équipements de travail" }} />
        <Stack.Screen name="ZonesInterdites" component={ZonesInterditesScreen} options={{ title: "Zones interdites" }} />
        <Stack.Screen name="ConduiteEngins" component={ConduiteEnginsScreen} options={{ title: "Conduite d'engins" }} />
        <Stack.Screen name="TravailIsole" component={TravailIsoleScreen} options={{ title: "Travail isolé" }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
