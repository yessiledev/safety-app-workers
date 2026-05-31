import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RisqueElectriqueScreen() {
  const navigation = useNavigation();

  const dangers = [
    { titre: "Câble dénudé", texte: "Risque d’électrisation au simple contact." },
    { titre: "Prise cassée", texte: "Peut provoquer un arc électrique ou un court-circuit." },
    { titre: "Humidité", texte: "L’eau augmente fortement le risque d’électrocution." },
    { titre: "Machine défectueuse", texte: "Odeur de brûlé, étincelles, vibrations anormales." },
    { titre: "Surcharge électrique", texte: "Multiprises empilées, rallonges en série." }
  ];

  const reflexes = [
    { titre: "Ne jamais toucher une victime électrisée", texte: "Couper le courant avant toute intervention." },
    { titre: "Couper l’alimentation", texte: "Disjoncteur, interrupteur d’urgence, prise." },
    { titre: "Éloigner les personnes", texte: "Sécuriser la zone immédiatement." },
    { titre: "Appeler les secours", texte: "112 ou 18 selon la situation." }
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Risque électrique</Text>
      <Text style={styles.subtitle}>Les bons réflexes</Text>

      <Text style={styles.sectionTitle}>Dangers à reconnaître</Text>
      {dangers.map((d, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.cardTitle}>{d.titre}</Text>
          <Text style={styles.cardText}>{d.texte}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Que faire en cas d’électrisation ?</Text>
      {reflexes.map((r, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.cardTitle}>{r.titre}</Text>
          <Text style={styles.cardText}>{r.texte}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Erreurs à éviter</Text>
      <Text style={styles.item}>• Toucher une victime encore en contact avec le courant</Text>
      <Text style={styles.item}>• Utiliser de l’eau sur un feu électrique</Text>
      <Text style={styles.item}>• Manipuler un appareil mouillé</Text>
      <Text style={styles.item}>• Réparer soi-même un câble ou une prise</Text>

      <Text style={styles.sectionTitle}>Message d’encouragement</Text>
      <Text style={styles.encouragement}>
        Le danger électrique est invisible, mais tes réflexes peuvent sauver une vie.  
        Tu fais la différence en restant vigilant.
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
