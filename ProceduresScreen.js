import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProceduresScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Procédures essentielles</Text>

      <Text style={styles.sectionTitle}>Avant de commencer</Text>
      <Text style={styles.item}>• Vérifier ses EPI (chaussures, gants, casque…)</Text>
      <Text style={styles.item}>• Lire les consignes du poste</Text>
      <Text style={styles.item}>• Identifier les zones à risque</Text>
      <Text style={styles.item}>• Signaler tout matériel défectueux</Text>

      <Text style={styles.sectionTitle}>Pendant la mission</Text>
      <Text style={styles.item}>• Garder une posture sécurisée</Text>
      <Text style={styles.item}>• Ne jamais courir en zone de travail</Text>
      <Text style={styles.item}>• Respecter les limites de charge</Text>
      <Text style={styles.item}>• Ne jamais désactiver un dispositif de sécurité</Text>

      <Text style={styles.sectionTitle}>En cas de danger</Text>
      <Text style={styles.item}>• S’éloigner immédiatement de la zone</Text>
      <Text style={styles.item}>• Prévenir un responsable</Text>
      <Text style={styles.item}>• Signaler le danger dans l’application</Text>
      <Text style={styles.item}>• Exercer son droit de retrait si nécessaire</Text>

      <Text style={styles.sectionTitle}>Accès rapides</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate("SignalerDanger")}
      >
        <Text style={styles.buttonText}>Signaler un danger</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate("DroitRetrait")}
      >
        <Text style={styles.buttonText}>Droit de retrait</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate("Checklist")}
      >
        <Text style={styles.buttonText}>Faire la check‑list</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: "600", marginTop: 25, marginBottom: 10 },
  item: { fontSize: 16, marginBottom: 5, color: "#444" },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: "center"
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" }
});
