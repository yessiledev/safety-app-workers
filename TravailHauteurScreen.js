import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EmergencyButton from '../components/EmergencyButton';

export default function TravailHauteurScreen() {
  const navigation = useNavigation();

  const gestes = [
    { titre: "Vérifier l’équipement", texte: "Échelle, plateforme, harnais : tout doit être en bon état." },
    { titre: "Utiliser un harnais", texte: "Obligatoire au-delà de 3 mètres ou en absence de garde-corps." },
    { titre: "Fixer un point d’ancrage", texte: "Toujours choisir un point solide, certifié et à la bonne hauteur." },
    { titre: "Garder 3 points d’appui", texte: "2 mains + 1 pied ou 2 pieds + 1 main." },
    { titre: "Travailler face à l’échelle", texte: "Ne jamais se pencher sur le côté." }
  ];

  const erreurs = [
    "Monter sur une échelle instable",
    "Utiliser une chaise ou un carton pour prendre de la hauteur",
    "Travailler avec les mains occupées en montant",
    "Dépasser la dernière marche",
    "Ne pas attacher son harnais"
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Travail en hauteur</Text>
      <Text style={styles.subtitle}>Éviter les chutes</Text>

      <Text style={styles.sectionTitle}>Les bons gestes</Text>
      {gestes.map((g, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.cardTitle}>{g.titre}</Text>
          <Text style={styles.cardText}>{g.texte}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Erreurs à éviter</Text>
      {erreurs.map((e, i) => (
        <Text key={i} style={styles.item}>• {e}</Text>
      ))}

      <Text style={styles.sectionTitle}>Quand arrêter immédiatement ?</Text>
      <Text style={styles.item}>• Équipement instable ou abîmé</Text>
      <Text style={styles.item}>• Absence de harnais en zone obligatoire</Text>
      <Text style={styles.item}>• Vent fort ou sol glissant</Text>
      <Text style={styles.item}>• Fatigue ou vertige</Text>

      <Text style={styles.sectionTitle}>Message d’encouragement</Text>
      <Text style={styles.encouragement}>
        Une chute de hauteur ne pardonne pas.  
        Prendre 10 secondes pour vérifier ton équipement,  
        c’est peut-être sauver ta vie.
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
