import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import EmergencyButton from '../components/EmergencyButton';

export default function SignalerDangerScreen() {
  const [description, setDescription] = useState("");

  const const handleSend = () => {
  if (description.trim() === "") {
    Alert.alert("Attention", "Merci de décrire le danger.");
    return;
  }

  fetch("http://localhost:3000/danger", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      description,
      date: new Date().toISOString()
    })
  })
    .then(res => res.json())
    .then(() => {
      Alert.alert(
        "Danger signalé",
        "Ton signalement a été enregistré et transmis."
      );
      setDescription("");
    })
    .catch(err => {
      console.error(err);
      Alert.alert("Erreur", "Impossible d’enregistrer le danger.");
    });
};
=> {
    if (description.trim() === "") {
      Alert.alert("Attention", "Merci de décrire le danger.");
      return;
    }

    Alert.alert(
      "Danger signalé",
      "Ton message a été préparé :\n\n" +
      "« Je signale un danger sur mon poste : " + description + ". " +
      "Merci de prendre les mesures nécessaires immédiatement. »"
    );

    setDescription("");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Signaler un danger</Text>

      <Text style={styles.sectionTitle}>Décris le danger</Text>
      <Text style={styles.text}>
        Explique ce que tu observes : matériel défectueux, sol glissant, charge instable,
        absence d’EPI, produit chimique renversé, etc.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Exemple : sol glissant dans l’allée 3"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Envoyer le signalement</Text>
      </TouchableOpacity>
          <EmergencyButton />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: "600", marginBottom: 10 },
  text: { fontSize: 16, color: "#444", marginBottom: 15 },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    minHeight: 120,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20
  },
  button: {
    backgroundColor: "#f44336",
    padding: 15,
    borderRadius: 8,
    alignItems: "center"
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" }
});
