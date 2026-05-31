import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RisquesChimiquesScreen() {
  const navigation = useNavigation();

  const pictos = [
    { nom: "Explosif", description: "Risque d’explosion en cas de choc, chaleur ou friction." },
    { nom: "Inflammable", description: "Peut s’enflammer facilement au contact d’une flamme ou d’une étincelle." },
    { nom: "Comburant", description: "Aggrave un incendie, alimente la combustion." },
    { nom: "Gaz sous pression", description: "Risque d’explosion ou de brûlure froide." },
    { nom: "Corrosif", description: "Attaque la peau, les yeux et les matériaux." },
    { nom: "Toxique", description: "Peut être mortel même en faible quantité." },
    { nom: "Nocif / irritant", description: "Provoque irritations, allergies, somnolence." },
    { nom: "Danger pour la santé", description: "Risque à long terme : cancer, fertilité, organes." },
    { nom: "Danger pour l’environnement", description: "Toxique pour les organismes aquatiques." }
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Risques chimiques</Text>
      <Text style={styles.subtitle}>Comprendre les pictogrammes</Text>

      {pictos.map((p, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.pictoName}>{p.nom}</Text>
          <Text style={styles.pictoText}>{p.description}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>EPI recommandés</Text>
      <Text style={styles.item}>• Gants adaptés au produit</Text>
      <Text style={styles.item}>• Lunettes ou visière</Text>
      <Text style={styles.item}>• Masque filtrant si nécessaire</Text>
      <Text style={styles.item}>• Blouse ou combinaison</Text>

      <Text style={styles.sectionTitle}>Erreurs à éviter</Text>
      <Text style={styles.item}>• Ouvrir un produit sans lire l’étiquette</Text>
      <Text style={styles.item}>• Mélanger deux produits</Text>
      <Text style={styles.item}>• Jeter un produit dans l’évier</Text>
      <Text style={styles.item}>• Travailler sans ventilation</Text>

      <Text style={styles.sectionTitle}>Message d’encouragement</Text>
      <Text style={styles.encouragement}>
        Lire un pictogramme, c’est comprendre un danger en une seconde.  
        Tu protèges ta santé et celle des autres.
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

      <Text style={styles.sectionTitle}>Besoin d’aide ?</Text>

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

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 5 },
  subtitle: { fontSize: 18, color: "#555", marginBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: "600", marginTop: 25, marginBottom: 10 },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd"
  },
  pictoName: { fontSize: 18, fontWeight: "600", marginBottom: 5 },
  pictoText: { fontSize: 16, color: "#444" },
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
  buttonText: { color