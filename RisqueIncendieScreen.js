import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EmergencyButton from '../components/EmergencyButton';

export default function RisqueIncendieScreen() {
  const navigation = useNavigation();

  const gestes = [
    { titre: "Donner l’alerte", texte: "Prévenir immédiatement un responsable ou activer l’alarme incendie." },
    { titre: "Évacuer calmement", texte: "Suivre les flèches vertes, ne pas courir, ne pas revenir en arrière." },
    { titre: "Fermer les portes", texte: "Limiter la propagation de la fumée et du feu." },
    { titre: "Ne jamais utiliser l’ascenseur", texte: "Toujours prendre les escaliers." },
    { titre: "Se regrouper au point de rassemblement", texte: "Attendre les consignes des secours." }
  ];

  const extincteurs = [
    { type: "Eau pulvérisée", usage: "Feux de papier, carton, bois." },
    { type: "CO₂", usage: "Feux électriques, machines, armoires électriques." },
    { type: "Poudre", usage: "Tous types de feux, très polyvalent." }
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Risque incendie</Text>
      <Text style={styles.subtitle}>Les bons réflexes</Text>

      {gestes.map((g, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.cardTitle}>{g.titre}</Text>
          <Text style={styles.cardText}>{g.texte}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Types d’extincteurs</Text>

      {extincteurs.map((e, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.cardTitle}>{e.type}</Text>
          <Text style={styles.cardText}>{e.usage}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Erreurs à éviter</Text>
      <Text style={styles.item}>• Tenter d’éteindre un feu trop important</Text>
      <Text style={styles.item}>• Ouvrir une porte chaude</Text>
      <Text style={styles.item}>• Respirer la fumée (toxique)</Text>
      <Text style={styles.item}>• Revenir chercher un objet</Text>

      <Text style={styles.sectionTitle}>Message d’encouragement</Text>
      <Text style={styles.encouragement}>
        En cas d’incendie, chaque geste compte.  
        Tu peux sauver ta vie et celle des autres.
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
<EmergencyButton />

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
