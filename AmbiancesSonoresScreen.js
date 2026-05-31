import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AmbiancesSonoresScreen() {
  const navigation = useNavigation();

  const niveaux = [
    { titre: "80 dB", texte: "Niveau à partir duquel une protection auditive est recommandée." },
    { titre: "85 dB", texte: "Protection obligatoire au-delà de cette limite." },
    { titre: "100 dB", texte: "Danger immédiat : exposition très courte seulement." },
    { titre: "120 dB", texte: "Seuil de douleur : risque de lésion instantanée." }
  ];

  const protections = [
    { titre: "Bouchons d’oreilles", texte: "Adaptés aux expositions longues et modérées." },
    { titre: "Casque anti-bruit", texte: "Idéal pour les environnements très bruyants." },
    { titre: "Bouchons moulés", texte: "Confort maximal pour les utilisateurs réguliers." }
  ];

  const erreurs = [
    "Retirer les protections pour parler avec un collègue",
    "Porter un casque mal ajusté",
    "Penser qu’on s’habitue au bruit (on s’abîme, on ne s’habitue pas)",
    "Ignorer un bruit anormal sur une machine"
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Ambiances sonores</Text>
      <Text style={styles.subtitle}>Protéger son audition</Text>

      <Text style={styles.sectionTitle}>Niveaux sonores dangereux</Text>
      {niveaux.map((n, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.cardTitle}>{n.titre}</Text>
          <Text style={styles.cardText}>{n.texte}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Protections auditives</Text>
      {protections.map((p, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.cardTitle}>{p.titre}</Text>
          <Text style={styles.cardText}>{p.texte}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Erreurs à éviter</Text>
      {erreurs.map((e, i) => (
        <Text key={i} style={styles.item}>• {e}</Text>
      ))}

      <Text style={styles.sectionTitle}>Message d’encouragement</Text>
      <Text style={styles.encouragement}>
        Ton audition ne repousse pas.  
        Une protection aujourd’hui, c’est une bonne santé demain.
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
