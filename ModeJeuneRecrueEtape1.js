import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EmergencyButton from '../components/EmergencyButton';

export default function ModeJeuneRecrueEtape1() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.title}>Étape 1</Text>
      <Text style={styles.subtitle}>Ta vie avant tout</Text>

      <View style={styles.cardDanger}>
        <Text style={styles.cardTitle}>Ces accidents n’auraient jamais dû arriver</Text>
        <Text style={styles.cardText}>
          • Un jeune écrasé sous des carcasses de bétail.{"\n"}
          • Un autre brûlé sous du goudron bouillant.{"\n"}
          • Un autre tombé d’un toit en pleine canicule.{"\n\n"}
          Ils n’étaient pas imprudents. Ils étaient seuls, mal encadrés, mal informés.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Règle absolue</Text>
        <Text style={styles.cardText}>
          Si tu ne comprends pas ce qu’on te demande, tu t’arrêtes.{"\n"}
          Si personne ne t’explique, tu t’arrêtes.{"\n"}
          Si tu ne le sens pas, tu t’arrêtes.{"\n\n"}
          Ta vie vaut plus que n’importe quelle tâche.
        </Text>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate("ModeJeuneRecrueEtape2")}
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
  cardDanger: {
    backgroundColor: "#ffe5e5",
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#d32f2f",
    marginBottom: 20
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
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
