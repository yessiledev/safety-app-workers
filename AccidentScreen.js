import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EmergencyButton from '../components/EmergencyButton';

export default function AccidentScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Accident du travail : que faire ?</Text>

      <Text style={styles.sectionTitle}>1. Sécuriser la zone</Text>
      <Text style={styles.item}>• Éloigner les personnes du danger</Text>
      <Text style={styles.item}>• Couper les machines si possible</Text>
      <Text style={styles.item}>• Ne pas déplacer la victime sauf danger immédiat</Text>

      <Text style={styles.sectionTitle}>2. Prévenir immédiatement</Text>
      <Text style={styles.item}>• Un responsable</Text>
      <Text style={styles.item}>• Le service sécurité</Text>
      <Text style={styles.item}>• Les secours si nécessaire (112)</Text>

      <Text style={styles.sectionTitle}>3. Aider la victime</Text>
      <Text style={styles.item}>• Rassurer, parler calmement</Text>
      <Text style={styles.item}>• Ne jamais donner à boire</Text>
      <Text style={styles.item}>• Ne pas retirer un EPI coincé</Text>

      <Text style={styles.sectionTitle}>4. Déclarer l’accident</Text>
      <Text style={styles.item}>• Informer l’employeur dans les 24h</Text>
      <Text style={styles.item}>• Faire un signalement interne</Text>
      <Text style={styles.item}>• Noter les témoins et circonstances</Text>

      <Text style={styles.sectionTitle}>Message d’encouragement</Text>
      <Text style={styles.encouragement}>
        En cas d’accident, garder son calme sauve des vies.  
        Tu n’es jamais seul : les procédures sont là pour t’aider.
      </Text>

      <Text style={styles.sectionTitle}>Si quelqu’un te dit :</Text>
      <View style={styles.quoteBoxRed}>
        <Text style={styles.quote}>« Eh le jeune, lâche ton téléphone, on est au travail ! »</Text>
      </View>

      <Text style={styles.sectionTitle}>Tu peux répondre :</Text>
      <View style={styles.quoteBoxGreen}>
        <Text style={styles.quote}>
          « Je consulte les règles de sécurité chef, c’est pour éviter un accident. »
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Besoin d’aide immédiate ?</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate("AssistantIA")}
      >
        <Text style={styles.buttonText}>Poser une question à l’IA</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.buttonSecondary}
        onPress={() => navigation.navigate("SignalerDanger")}
      >
        <Text style={styles.buttonSecondaryText}>Signaler un danger</Text>
      </TouchableOpacity>
<EmergencyButton />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: "600", marginTop: 25, marginBottom: 10 },
  item: { fontSize: 16, marginBottom: 5, color: "#444" },
  encouragement: { fontSize: 16, marginVertical: 10, color: "#333" },
  quoteBoxRed: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#f44336",
    marginBottom: 15
  },
  quoteBoxGreen: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#28a745",
    marginBottom: 15
  },
  quote: { fontSize: 16, fontStyle: "italic", color: "#555" },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: "center"
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  buttonSecondary: {
    backgroundColor: "#f44336",
    padding: 15,
    borderRadius: 8,
    marginBottom: 30,
    alignItems: "center"
  },
  buttonSecondaryText: { color: "#fff", fontSize: 16, fontWeight: "600" }


});

