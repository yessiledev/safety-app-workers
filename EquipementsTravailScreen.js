import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EmergencyButton from '../components/EmergencyButton';

export default function EquipementsTravailScreen() {
  const navigation = useNavigation();

  const checklist = [
    { titre: "État général", texte: "Aucune fissure, déformation, pièce manquante." },
    { titre: "Stabilité", texte: "L’équipement doit être stable, sans jeu anormal." },
    { titre: "Câbles et connexions", texte: "Aucun câble dénudé, prise cassée ou connecteur abîmé." },
    { titre: "Boutons et commandes", texte: "Tous les boutons doivent fonctionner correctement." },
    { titre: "Sécurité intégrée", texte: "Présence des carters, protections, arrêts d’urgence." }
  ];

  const anomalies = [
    "Bruit inhabituel",
    "Odeur de brûlé",
    "Vibrations anormales",
    "Fuite d’huile ou de liquide",
    "Échauffement excessif"
  ];

  const erreurs = [
    "Utiliser un équipement défectueux",
    "Forcer une machine qui bloque",
    "Contourner une sécurité",
    "Ignorer un voyant rouge",
    "Continuer malgré un bruit anormal"
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Équipements de travail</Text>
      <Text style={styles.subtitle}>Vérifier avant d’utiliser</Text>

      <Text style={styles.sectionTitle}>Check-list avant utilisation</Text>
      {checklist.map((c, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.cardTitle}>{c.titre}</Text>
          <Text style={styles.cardText}>{c.texte}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Anomalies à repérer</Text>
      {anomalies.map((a, i) => (
        <Text key={i} style={styles.item}>• {a}</Text>
      ))}

      <Text style={styles.sectionTitle}>Erreurs à éviter</Text>
      {erreurs.map((e, i) => (
        <Text key={i} style={styles.item}>• {e}</Text>
      ))}

      <Text style={styles.sectionTitle}>Quand arrêter immédiatement ?</Text>
      <Text style={styles.item}>• Si une sécurité manque ou est cassée</Text>
      <Text style={styles.item}>• Si un voyant rouge s’allume</Text>
      <Text style={styles.item}>• Si l’équipement fait un bruit inhabituel</Text>
      <Text style={styles.item}>• Si une odeur de brûlé apparaît</Text>

      <Text style={styles.sectionTitle}>Message d’encouragement</Text>
      <Text style={styles.encouragement}>
        Un équipement bien vérifié, c’est un accident évité.  
        Tu protèges ta sécurité et celle de tes collègues.
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
