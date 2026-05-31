import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ZonesInterditesScreen() {
  const navigation = useNavigation();

  const zones = [
    { titre: "Zone machines en fonctionnement", texte: "Accès interdit sans autorisation et sans EPI spécifiques." },
    { titre: "Zone électrique", texte: "Réservée aux habilités. Risque d’électrocution grave." },
    { titre: "Zone chimique", texte: "Accès limité aux personnes formées et équipées." },
    { titre: "Zone de circulation chariots", texte: "Interdite aux piétons hors couloirs dédiés." },
    { titre: "Zone de chargement", texte: "Risque d’écrasement, chute de charges, mouvements imprévisibles." }
  ];

  const erreurs = [
    "Entrer dans une zone sans autorisation",
    "Contourner une barrière ou un ruban de sécurité",
    "Suivre un collègue sans vérifier l’accès",
    "Ignorer un panneau d’interdiction",
    "Rester dans une zone dangereuse pour discuter"
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Zones interdites</Text>
      <Text style={styles.subtitle}>Accès restreint</Text>

      <Text style={styles.sectionTitle}>Zones à accès limité</Text>
      {zones.map((z, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.cardTitle}>{z.titre}</Text>
          <Text style={styles.cardText}>{z.texte}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Erreurs à éviter</Text>
      {erreurs.map((e, i) => (
        <Text key={i} style={styles.item}>• {e}</Text>
      ))}

      <Text style={styles.sectionTitle}>Quand alerter immédiatement ?</Text>
      <Text style={styles.item}>• Si une barrière est ouverte sans raison</Text>
      <Text style={styles.item}>• Si un collègue entre dans une zone interdite</Text>
      <Text style={styles.item}>• Si un panneau est tombé ou manquant</Text>
      <Text style={styles.item}>• Si une machine tourne sans protection</Text>

      <Text style={styles.sectionTitle}>Message d’encouragement</Text>
      <Text style={styles.encouragement}>
        Respecter les zones interdites, c’est protéger ta vie et celle des autres.  
        Tu es un acteur de la sécurité du site.
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
