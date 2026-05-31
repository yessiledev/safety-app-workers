import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProduitsDangereuxScreen() {
  const navigation = useNavigation();

  const stockage = [
    { titre: "Séparer les familles de produits", texte: "Ne jamais stocker acides, bases et solvants ensemble." },
    { titre: "Ventilation obligatoire", texte: "Stocker dans un local ventilé pour éviter l’accumulation de vapeurs." },
    { titre: "Étiquettes visibles", texte: "Toujours orienter les étiquettes vers l’extérieur." },
    { titre: "Récipients fermés", texte: "Ne jamais laisser un bidon ouvert, même quelques minutes." }
  ];

  const manipulation = [
    { titre: "Lire l’étiquette", texte: "Toujours vérifier le pictogramme et les consignes avant utilisation." },
    { titre: "Porter les EPI adaptés", texte: "Gants, lunettes, masque selon le produit." },
    { titre: "Utiliser en zone ventilée", texte: "Éviter les espaces confinés." },
    { titre: "Ne jamais transvaser sans autorisation", texte: "Risque de réaction chimique ou d’erreur d’étiquetage." }
  ];

  const erreurs = [
    "Mélanger deux produits sans vérifier la compatibilité",
    "Stocker près d’une source de chaleur",
    "Utiliser un produit sans EPI",
    "Jeter un produit dans l’évier",
    "Remplir une bouteille alimentaire avec un produit chimique"
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Produits dangereux</Text>
      <Text style={styles.subtitle}>Stockage et manipulation</Text>

      <Text style={styles.sectionTitle}>Règles de stockage</Text>
      {stockage.map((s, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.cardTitle}>{s.titre}</Text>
          <Text style={styles.cardText}>{s.texte}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Règles de manipulation</Text>
      {manipulation.map((m, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.cardTitle}>{m.titre}</Text>
          <Text style={styles.cardText}>{m.texte}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Erreurs à éviter</Text>
      {erreurs.map((e, i) => (
        <Text key={i} style={styles.item}>• {e}</Text>
      ))}

      <Text style={styles.sectionTitle}>Message d’encouragement</Text>
      <Text style={styles.encouragement}>
        Un produit dangereux n’est pas dangereux quand on le respecte.  
        Tu maîtrises les règles, tu maîtrises le risque.
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
