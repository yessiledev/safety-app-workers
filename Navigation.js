import AccueilJeunesScreen from '../screens/AccueilJeunesScreen';

<Stack.Screen 
  name="AccueilJeunes" 
  component={AccueilJeunesScreen} 
  options={{ title: "Ta vie avant tout" }}
/>

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
<Stack.Screen 
  name="Dashboard" 
  component={DashboardScreen} 
  options={{ title: "Tableau de bord" }}
/>
import FormationScreen from '../screens/FormationScreen';

<Stack.Screen 
  name="Formation" 
  component={FormationScreen} 
  options={{ title: "Formation Sécurité" }}
/>
import ConsignesSiteScreen from '../screens/ConsignesSiteScreen';

<Stack.Screen 
  name="ConsignesSite" 
  component={ConsignesSiteScreen} 
  options={{ title: "Consignes du site" }}
/>
import AssistantIAScreen from '../screens/AssistantIAScreen';

<Stack.Screen 
  name="AssistantIA" 
  component={AssistantIAScreen} 
  options={{ title: "Assistant IA" }}
/>
import EpiScreen from '../screens/EpiScreen';

<Stack.Screen 
  name="EPI" 
  component={EpiScreen} 
  options={{ title: "EPI obligatoires" }}
/>
import CirculationScreen from '../screens/CirculationScreen';

<Stack.Screen 
  name="Circulation" 
  component={CirculationScreen} 
  options={{ title: "Circulation interne" }}
/>
import TravailIsoleScreen from '../screens/TravailIsoleScreen';

<Stack.Screen 
  name="TravailIsole" 
  component={TravailIsoleScreen} 
  options={{ title: "Travail isolé" }}
/>


import HomeScreen from '../screens/HomeScreen';
import ChecklistScreen from '../screens/ChecklistScreen';
import DroitRetraitScreen from '../screens/DroitRetraitScreen';
import SignalerDangerScreen from '../screens/SignalerDangerScreen';
import HistoriqueDangersScreen from '../screens/HistoriqueDangersScreen';
import DashboardScreen from '../screens/DashboardScreen';
import ProceduresScreen from '../screens/ProceduresScreen';
import DroitRetraitScreen from '../screens/DroitRetraitScreen';
import { useNavigation } from '@react-navigation/native';
const navigation = useNavigation();

<Stack.Screen 
  name="DroitRetrait" 
  component={DroitRetraitScreen} 
  options={{ title: "Droit de retrait" }}
/>

<Stack.Screen 
  name="Procedures" 
  component={ProceduresScreen} 
  options={{ title: "Procédures essentielles" }}
/>

<Stack.Screen 
  name="Dashboard" 
  component={DashboardScreen} 
  options={{ title: "Tableau de bord" }}
/>

<Stack.Screen 
  name="HistoriqueDangers" 
  component={HistoriqueDangersScreen} 
  options={{ title: "Historique des dangers" }}
/>

<Stack.Screen 
  name="SignalerDanger" 
  component={SignalerDangerScreen} 
  options={{ title: "Signaler un danger" }}
/>

<Stack.Screen 
  name="DroitRetrait" 
  component={DroitRetraitScreen} 
  options={{ title: "Droit de retrait" }}
/>

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
<Stack.Screen 
  name="FicheMetier" 
  component={JobScreen} 
  options={{ title: "Fiche métier" }}
/>
<Stack.Screen 
  name="ListeMetiers" 
  component={JobListScreen} 
  options={{ title: "Métiers" }}
/>
import RisquesChimiquesScreen from '../screens/RisquesChimiquesScreen';

<Stack.Screen 
  name="RisquesChimiques" 
  component={RisquesChimiquesScreen} 
  options={{ title: "Risques chimiques" }}
/>
import RisqueIncendieScreen from '../screens/RisqueIncendieScreen';

<Stack.Screen 
  name="RisqueIncendie" 
  component={RisqueIncendieScreen} 
  options={{ title: "Risque incendie" }}
/>
import PremiersSecoursScreen from '../screens/PremiersSecoursScreen';

<Stack.Screen 
  name="PremiersSecours" 
  component={PremiersSecoursScreen} 
  options={{ title: "Premiers secours" }}
/>
import RisqueElectriqueScreen from '../screens/RisqueElectriqueScreen';

<Stack.Screen 
  name="RisqueElectrique" 
  component={RisqueElectriqueScreen} 
  options={{ title: "Risque électrique" }}
/>
import ManutentionScreen from '../screens/ManutentionScreen';

<Stack.Screen 
  name="Manutention" 
  component={ManutentionScreen} 
  options={{ title: "Manutention" }}
/>

import TravailHauteurScreen from '../screens/TravailHauteurScreen';

<Stack.Screen 
  name="TravailHauteur" 
  component={TravailHauteurScreen} 
  options={{ title: "Travail en hauteur" }}
/>
import AmbiancesSonoresScreen from '../screens/AmbiancesSonoresScreen';

<Stack.Screen 
  name="AmbiancesSonores" 
  component={AmbiancesSonoresScreen} 
  options={{ title: "Ambiances sonores" }}
/>
import AmbiancesThermiquesScreen from '../screens/AmbiancesThermiquesScreen';

<Stack.Screen 
  name="AmbiancesThermiques" 
  component={AmbiancesThermiquesScreen} 
  options={{ title: "Ambiances thermiques" }}
/>
import ProduitsDangereuxScreen from '../screens/ProduitsDangereuxScreen';

<Stack.Screen 
  name="ProduitsDangereux" 
  component={ProduitsDangereuxScreen} 
  options={{ title: "Produits dangereux" }}
/>
import EquipementsTravailScreen from '../screens/EquipementsTravailScreen';

<Stack.Screen 
  name="EquipementsTravail" 
  component={EquipementsTravailScreen} 
  options={{ title: "Équipements de travail" }}
/>
import ZonesInterditesScreen from '../screens/ZonesInterditesScreen';

<Stack.Screen 
  name="ZonesInterdites" 
  component={ZonesInterditesScreen} 
  options={{ title: "Zones interdites" }}
/>
import ConduiteEnginsScreen from '../screens/ConduiteEnginsScreen';

<Stack.Screen 
  name="ConduiteEngins" 
  component={ConduiteEnginsScreen} 
  options={{ title: "Conduite d'engins" }}
/>
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

  );
}
