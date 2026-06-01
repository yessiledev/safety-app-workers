import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EmergencyButton from '../components/EmergencyButton';

export default function ModeJeuneRecrueIntro() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Mode Jeune Recrue</Text>
      <Text style={styles.subtitle}>Ton parcours sécurité en 5 étapes</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Ta vie avant tout</Text>
        <Text style={styles.cardText}>
          Avant de commencer à travailler, tu dois connaître les règles qui protègent ta vie.
          Ce parcours te donne les réflexes essentiels pour éviter les accidents graves.
        </Text>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate("ModeJeuneRecrueEtape1")}
      >
        <Text style={styles.buttonText}>Commencer le parcours</Text>
      </TouchableOpacity>

      <EmergencyButton />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 30, fontWeight: "bold", marginBottom: 5 },
  subtitle: { fontSize: 18, color: "#555", marginBottom: 20 },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 20
  },
  cardTitle: { fontSize: 20, fontWeight: "600", marginBottom: 10 },
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
