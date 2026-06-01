import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EmergencyButton from '../components/EmergencyButton';

export default function ConduiteEnginsScreen() {
  const navigation = useNavigation();

  const autorisations = [
    { titre: "CACES obligatoire", texte: "Aucune conduite d’engin sans certification adaptée." },
    { titre: "Autorisation de conduite", texte: "Délivrée par l’employeur après vérification des compétences." },
    { titre: "Visite médicale", texte: "Obligatoire pour valider l’aptitude à la conduite." }
  ];

  const regles = [
    { titre: "Rouler à vitesse réduite", texte: "Adapter la vitesse à la zone et à la visibilité." },
    { titre: "Klaxonner aux intersections", texte: "Toujours prévenir avant de passer un angle mort." },
    { titre: "Regarder dans toutes les directions", texte: "Les piétons peuvent surgir à tout moment." },
    { titre: "Transporter des charges stables", texte: "Jamais de charge instable ou trop haute." },
    { titre: "Respecter les zones piétonnes", texte: "Interdiction formelle d’y circuler." }
  ];

  const erreurs = [
    "Lever une charge trop haute",
    "Rouler trop vite en intérieur",
    "Transporter un collègue sur un engin",
    "Prendre un virage serré avec une charge",
    "Utiliser un engin sans vérifier l’état"
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Conduite d’engins</Text>
      <Text style={styles.subtitle}>Règles essentielles</Text>

      <Text style={styles.sectionTitle}>Autorisations obligatoires</Text>
      {autorisations.map((a, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.cardTitle}>{a.titre}</Text>
          <Text style={styles.cardText}>{a.texte}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Règles de conduite</Text>
      {regles.map((r, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.cardTitle}>{r.titre}</Text>
          <Text style={styles.cardText}>{r.texte}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Erreurs à éviter</Text>
      {erreurs.map((e, i) => (
        <Text key={i} style={styles.item}>• {e}</Text>
      ))}

      <Text style={styles.sectionTitle}>Quand arrêter immédiatement ?</Text>
      <Text style={styles.item}>• Si un voyant rouge s’allume</Text>
      <Text style={styles.item}>• Si une fuite ou un bruit anormal apparaît</Text>
      <Text style={styles.item}>• Si la visibilité est insuffisante</Text>
      <Text style={styles.item}>• Si un piéton se trouve dans la zone de manœuvre</Text>

      <Text style={styles.sectionTitle}>Message d’encouragement</Text>
      <Text style={styles.encouragement}>
        Conduire un engin, c’est de la précision et du calme.  
        Tu es responsable de ta sécurité et de celle des autres.
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
