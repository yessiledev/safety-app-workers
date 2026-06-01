import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EmergencyButton from '../components/EmergencyButton';

export default function ModeJeuneRecrueEtape3() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.title}>Étape 3</Text>
      <Text style={styles.subtitle}>Tes réflexes en cas de doute</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Réflexe 1 — Tu t’arrêtes</Text>
        <Text style={styles.cardText}>
          Si tu ne comprends pas, si tu ne le sens pas, si tu as peur, si tu doutes…  
          Tu t’arrêtes immédiatement.  
          S’arrêter, c’est se protéger.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Réflexe 2 — Tu sors de la zone</Text>
        <Text style={styles.cardText}>
          Tu ne restes jamais dans un endroit où tu te sens en danger.  
          Tu te mets en sécurité, même si on ne t’a rien dit.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Réflexe 3 — Tu consultes l’application</Text>
        <Text style={styles.cardText}>
          L’application est là pour toi.  
          Tu peux vérifier les règles, les risques, les EPI, les procédures…  
          Et tu peux appuyer sur “Je ne le sens pas”.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Réflexe 4 — Tu demandes à une personne compétente</Text>
        <Text style={styles.cardText}>
          Tu n’es pas censé deviner.  
          Tu as le droit de demander :  
          “Tu peux me montrer ?”  
          “Tu peux vérifier avec moi ?”  
          “Je ne suis pas sûr, tu peux m’aider ?”
        </Text>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate("ModeJe
