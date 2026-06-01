import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EmergencyButton from '../components/EmergencyButton';

export default function ModeJeuneRecrueEtape2() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.title}>Étape 2</Text>
      <Text style={styles.subtitle}>Tes droits — Ce que ton chef DOIT faire</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Ton chef a des obligations légales</Text>
        <Text style={styles.cardText}>
          Avant de te laisser travailler, ton chef doit :{"\n\n"}
          • T’expliquer clairement la tâche{"\n"}
          • Te montrer les bons gestes{"\n"}
          • Vérifier que tu as compris{"\n"}
          • Te donner les EPI adaptés{"\n"}
          • S’assurer que tu n’es jamais seul sur un poste dangereux{"\n"}
          • Rester disponible si tu as un doute{"\n"}
        </Text>
      </View>

      <View style={styles.cardWarning}>
        <Text style={styles.cardTitle}>Ce que tu n’as PAS à accepter</Text>
        <Text style={styles.cardText}>
          ✘ “Vas-y, ça ira”{"\n"}
          ✘ “Fais comme tu peux”{"\n"}
          ✘ “On n’a pas le temps d’expliquer”{"\n"}
          ✘ “T’inquiète, on fait comme ça ici”{"\n"}
          ✘ Travailler sans EPI{"\n"}
          ✘ Travailler seul sur un poste dangereux{"\n"}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Tu as le droit de dire :</Text>
        <Text style={styles.cardText}>
          • “Je n’ai pas compris.”{"\n"}
          • “Je ne me sens pas en sécurité.”{"\n"}
          • “Je veux qu’on me montre.”{"\n"}
          • “Je préfère vérifier avant.”{"\n"}
        </Text>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate("ModeJeuneRecrueEtape3")}
      >
        <Text style={styles.buttonText}>Continuer</Text>
      </TouchableOpacity>

      <EmergencyButton />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 5 },
  subtitle: { fontSize: 18, color: "#555", marginBottom: 20 },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 20
  },

  cardWarning: {
    backgroundColor: "#fff3cd",
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#ff9800",
    marginBottom: 20
  },

  cardTitle: { fontSize: 18, fontWeight: "600", marginBottom: 10 },
  cardText: { fontSize: 16, color: "#444" },

  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 40
  },

  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" }
});
