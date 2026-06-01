import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EmergencyButton from '../components/EmergencyButton';

export default function ModeJeuneRecrueEtape4() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.title}>Étape 4</Text>
      <Text style={styles.subtitle}>Les dangers réels — ce qui tue les jeunes</Text>

      <View style={styles.cardDanger}>
        <Text style={styles.cardTitle}>1 — Les écrasements</Text>
        <Text style={styles.cardText}>
          Carcasses de bétail, palettes, charges instables, engins…  
          Un jeune est mort écrasé parce qu’il était seul et mal placé.  
          Tu ne dois JAMAIS te mettre sous une charge ou dans une zone d’écrasement.
        </Text>
      </View>

      <View style={styles.cardDanger}>
        <Text style={styles.cardTitle}>2 — Les brûlures graves</Text>
        <Text style={styles.cardText}>
          Goudron bouillant, métal chaud, vapeur, produits chimiques…  
          Un jeune est mort brûlé parce qu’on ne lui avait pas expliqué les risques.  
          Si tu vois de la chaleur, de la vapeur ou un liquide inconnu : tu t’arrêtes.
        </Text>
      </View>

      <View style={styles.cardDanger}>
        <Text style={styles.cardTitle}>3 — Les chutes</Text>
        <Text style={styles.cardText}>
          Toits, échelles, plateformes, bords non protégés…  
          Un jeune est tombé d’un toit en pleine canicule.  
          Jamais de travail en hauteur sans protection, sans formation, sans encadrement.
        </Text>
      </View>

      <View style={styles.cardDanger}>
        <Text style={styles.cardTitle}>4 — Les électrisations</Text>
        <Text style={styles.cardText}>
          Câbles dénudés, armoires ouvertes, machines mal isolées…  
          L’électricité ne pardonne pas.  
          Si tu vois un câble suspect : tu t’arrêtes et tu t’éloignes.
        </Text>
      </View>

      <View style={styles.cardDanger}>
        <Text style={styles.cardTitle}>5 — Les malaises et coups de chaud
