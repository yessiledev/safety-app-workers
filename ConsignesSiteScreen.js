import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ConsignesSiteScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Consignes du site</Text>

      <Text style={styles.sectionTitle}>Règles générales</Text>
      <Text style={styles.item}>• Respecter les zones de circulation</Text>
      <Text style={styles.item}>• Porter les EPI obligatoires en permanence</Text>
      <Text style={styles.item}>• Ne jamais entrer dans une zone interdite</Text>
      <Text style={styles.item}>• Signaler immédiatement tout danger</Text>

      <Text style={styles.sectionTitle}>Zones spécifiques</Text>
      <Text style={styles.item}>• Zone machines : accès réservé</Text>
      <Text style={styles.item}>• Quai de chargement : vigilance maximale</Text>
      <Text style={styles.item}>• Stockage : pas de téléphone en main</Text>

      <Text style={styles.sectionTitle}>Message d’encouragement</Text>
      <Text style={styles.encouragement}>
        Même si on te dit “Eh le jeune, lâche ton téléphone, on est au travail”,  
        tu peux répondre calmement :
      </Text>

      <View style={styles.quoteBox}>
        <Text style={styles.quote}>
          « Je consulte les règles de sécurité chef, c’est important pour éviter les accidents. »
        </Text>
      </View>

      <Text style={styles.encouragement}>
        C’est pro, respectueux, et ça montre que tu prends ta sécurité au sérieux.
      </Text>

      <Text style={styles.sectionTitle}>Accès rapides</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate("Procedures")}
      >
        <Text style={styles.buttonText}>Procédures essentielles</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate("Formation")}
      >
        <Text style={styles.buttonText}>Formation sécurité</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate("SignalerDanger")}
      >
        <Text style={styles.buttonText}>Signaler un danger</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: "600", marginTop: 25, marginBottom: 10 },
  item: { fontSize: 16, marginBottom: 5, color: "#444" },
  encouragement: { fontSize: 16, marginVertical: 10, color: "#333" },
  quoteBox: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#007bff",
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
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" }
});
