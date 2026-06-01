import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EmergencyButton from '../components/EmergencyButton';

export default function TravailIsoleScreen() {
  const navigation = useNavigation();

  const dispositifs = [
    { titre: "Dispositif d’alerte (DATI)", texte: "Badge, boîtier ou application permettant d’envoyer une alerte immédiate." },
    { titre: "Communication obligatoire", texte: "Prévenir un responsable avant et après l’intervention." },
    { titre: "Plan de travail isolé", texte: "Définir la durée, le lieu et les risques avant l’intervention." },
    { titre: "Vérification régulière", texte: "Contact programmé toutes les X minutes selon le risque." }
  ];

  const risques = [
    { titre: "Malaise ou blessure", texte: "Personne incapable d’appeler à l’aide." },
    { titre: "Chute ou glissade", texte: "Aucun témoin pour prévenir les secours." },
    { titre: "Risque chimique ou électrique", texte: "Intervention sans assistance immédiate." },
    { titre: "Agression ou intrusion", texte: "Travail isolé en zone sensible." }
  ];

  const erreurs = [
    "Ne pas prévenir qu’on commence une intervention",
    "Couper son téléphone ou le mettre en silencieux",
    "Ignorer un malaise ou une fatigue",
    "Travailler isolé sans DATI",
    "Changer de zone sans prévenir"
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Travail isolé</Text>
      <Text style={styles.subtitle}>Règles de sécurité</Text>

      <Text style={styles.sectionTitle}>Dispositifs obligatoires</Text>
      {dispositifs.map((d, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.cardTitle}>{d.titre}</Text>
          <Text style={styles.cardText}>{d.texte}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Risques spécifiques</Text>
      {risques.map((r, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.cardTitle}>{r.titre}</Text>
          <Text style={styles.cardText}>{r.texte}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Erreurs à éviter</Text>
      {erreurs.map((e, i) => (
        <Text key={i} style={styles.item}>• {e}</Text>
      ))}

      <Text style={styles.sectionTitle}>Quand alerter immédiatement ?</Text>
      <Text style={styles.item}>• Absence de réponse d’un collègue isolé</Text>
      <Text style={styles.item}>• Perte de communication</Text>
      <Text style={styles.item}>• Bruit anormal ou chute entendue</Text>
      <Text style={styles.item}>• DATI déclenché automatiquement</Text>

      <Text style={styles.sectionTitle}>Message d’encouragement</Text>
      <Text style={styles.encouragement}>
        Travailler seul ne veut pas dire être sans protection.  
        Tu as le droit d’être en sécurité, même isolé.
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
