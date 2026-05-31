import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AmbiancesThermiquesScreen() {
  const navigation = useNavigation();

  const chaleur = [
    { titre: "Boire régulièrement", texte: "Un verre toutes les 20 minutes, même sans soif." },
    { titre: "Faire des pauses à l’ombre", texte: "Éviter l’exposition prolongée en plein soleil." },
    { titre: "Porter des vêtements légers", texte: "Favoriser les matières respirantes." },
    { titre: "Signaler un malaise", texte: "Maux de tête, vertiges, fatigue = alerte." }
  ];

  const froid = [
    { titre: "Superposer les couches", texte: "3 couches : respirante, isolante, coupe-vent." },
    { titre: "Protéger les extrémités", texte: "Gants, bonnet, chaussettes épaisses." },
    { titre: "Bouger régulièrement", texte: "Éviter l’immobilité prolongée." },
    { titre: "Se réchauffer progressivement", texte: "Jamais au contact direct d’une source chaude." }
  ];

  const erreurs = [
    "Attendre d’avoir soif pour boire",
    "Travailler en plein soleil sans pause",
    "Retirer ses gants en chambre froide",
    "Ignorer un frisson ou un vertige",
    "Boire des boissons sucrées ou alcoolisées pour “se rafraîchir”"
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Ambiances thermiques</Text>
      <Text style={styles.subtitle}>Chaleur, froid, hydratation</Text>

      <Text style={styles.sectionTitle}>En cas de forte chaleur</Text>
      {chaleur.map((c, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.cardTitle}>{c.titre}</Text>
          <Text style={styles.cardText}>{c.texte}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>En cas de froid intense</Text>
      {froid.map((f, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.cardTitle}>{f.titre}</Text>
          <Text style={styles.cardText}>{f.texte}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Erreurs à éviter</Text>
      {erreurs.map((e, i) => (
        <Text key={i} style={styles.item}>• {e}</Text>
      ))}

      <Text style={styles.sectionTitle}>Message d’encouragement</Text>
      <Text style={styles.encouragement}>
        Ton corps est ton outil le plus précieux.  
        Le protéger de la chaleur et du froid, c’est travailler longtemps et en bonne santé.
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
  cardTitle: { fontSize: 18, fontWeight: "600", marginBottom: 5 },
  cardText: { fontSize: 16, color: "#444" },
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
