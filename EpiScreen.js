import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EmergencyButton from '../components/EmergencyButton';

export default function EpiScreen() {
  const navigation = useNavigation();

  const epis = [
    { nom: "Chaussures de sécurité", utilite: "Protègent des chutes d’objets et des écrasements." },
    { nom: "Gants de protection", utilite: "Évitent coupures, brûlures et irritations." },
    { nom: "Casque", utilite: "Protège la tête des chocs et chutes d’objets." },
    { nom: "Gilet haute visibilité", utilite: "Permet d’être vu en zone de circulation." },
    { nom: "Lunettes de protection", utilite: "Protègent les yeux des projections." }
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>EPI obligatoires</Text>

      {epis.map((e, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.epiName}>{e.nom}</Text>
          <Text style={styles.epiText}>{e.utilite}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Message d’encouragement</Text>
      <Text style={styles.encouragement}>
        Porter ses EPI, c’est pas “faire joli”.  
        C’est rentrer chez soi en bonne santé.
      </Text>

      <Text style={styles.sectionTitle}>Si quelqu’un te dit :</Text>
      <View style={styles.quoteBoxRed}>
        <Text style={styles.quote}>« Eh le jeune, lâche ton téléphone, on est au travail ! »</Text>
      </View>

      <Text style={styles.sectionTitle}>Tu peux répondre :</Text>
      <View style={styles.quoteBoxGreen}>
        <Text style={styles.quote}>
          « Je consulte les règles de sécurité chef, c’est pour éviter les accidents. »
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Accès rapides</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate("Procedures")}
      >
        <Text style={styles.buttonText}>Procédures essentielles</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate("Formation")}
      >
        <Text style={styles.buttonText}>Formation sécurité</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate("AssistantIA")}
      >
        <Text style={styles.buttonText}>Poser une question à l’IA</Text>
      </TouchableOpacity>
<EmergencyButton />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: "600", marginTop: 25, marginBottom: 10 },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd"
  },
  epiName: { fontSize: 18, fontWeight: "600", marginBottom: 5 },
  epiText: { fontSize: 16, color: "#444" },
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
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" }
});
