import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import EmergencyButton from '../components/EmergencyButton';

export default function AssistantIAScreen() {

  const openCopilot = () => {
    Linking.openURL("https://copilot.microsoft.com");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Assistant Sécurité IA</Text>

      <Text style={styles.sectionTitle}>Pose ta question sécurité</Text>
      <Text style={styles.text}>
        Tu peux poser une question à l’IA si tu as un doute sur :
      </Text>

      <Text style={styles.item}>• un geste à faire</Text>
      <Text style={styles.item}>• un EPI obligatoire</Text>
      <Text style={styles.item}>• une situation dangereuse</Text>
      <Text style={styles.item}>• une procédure à suivre</Text>

      <TouchableOpacity style={styles.button} onPress={openCopilot}>
        <Text style={styles.buttonText}>Ouvrir Copilot</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Si quelqu’un te dit :</Text>
      <View style={styles.quoteBox}>
        <Text style={styles.quote}>« Eh le jeune, lâche ton téléphone, on est au travail ! »</Text>
      </View>

      <Text style={styles.sectionTitle}>Tu peux répondre :</Text>
      <View style={styles.quoteBoxGreen}>
        <Text style={styles.quote}>
          « Je consulte les règles de sécurité chef, c’est pour éviter les accidents. »
        </Text>
      </View>

      <Text style={styles.text}>
        C’est respectueux, professionnel, et ça montre que tu prends ta sécurité au sérieux.
      </Text>

      <Text style={styles.sectionTitle}>Conseil du jour</Text>
      <Text style={styles.encouragement}>
        Prendre 30 secondes pour vérifier une consigne,  
        c’est éviter 30 jours d’arrêt de travail.
      </Text>
<EmergencyButton />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: "600", marginTop: 25, marginBottom: 10 },
  text: { fontSize: 16, color: "#444", marginBottom: 10 },
  item: { fontSize: 16, marginBottom: 5, color: "#333" },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    marginVertical: 20,
    alignItems: "center"
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  quoteBox: {
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
  encouragement: { fontSize: 16, color: "#333", marginBottom: 20 }
});
