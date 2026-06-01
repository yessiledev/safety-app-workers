import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import EmergencyButton from '../components/EmergencyButton';

export default function DroitRetraitScreen() {

  const handleMessage = () => {
    Alert.alert(
      "Message prêt",
      "Voici un message que tu peux envoyer à ton responsable :\n\n" +
      "« Je signale une situation présentant un danger grave et imminent. " +
      "J'exerce mon droit de retrait conformément à l'article L4131‑1 du Code du travail. »"
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Droit de retrait</Text>

      <Text style={styles.sectionTitle}>Quand l'utiliser ?</Text>
      <Text style={styles.text}>
        Tu peux exercer ton droit de retrait si tu penses être face à un 
        <Text style={styles.bold}> danger grave et imminent</Text> :
      </Text>

      <Text style={styles.item}>• Risque de chute de hauteur</Text>
      <Text style={styles.item}>• Machine non sécurisée</Text>
      <Text style={styles.item}>• Produit chimique non identifié</Text>
      <Text style={styles.item}>• Charge trop lourde ou instable</Text>
      <Text style={styles.item}>• Absence d’EPI essentiels</Text>

      <Text style={styles.sectionTitle}>Ce que dit la loi</Text>
      <Text style={styles.text}>
        Article L4131‑1 du Code du travail :  
        « Le travailleur alerte immédiatement l’employeur de toute situation 
        dont il a un motif raisonnable de penser qu’elle présente un danger 
        grave et imminent pour sa vie ou sa santé. »
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleMessage}>
        <Text style={styles.buttonText}>Message pré‑rédigé</Text>
      <TouchableOpacity 
  style={styles.secondaryButton}
  onPress={() => navigation.navigate("SignalerDanger")}
>
  <Text style={styles.secondaryText}>Signaler un danger</Text>
</TouchableOpacity>
<EmergencyButton />


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: "600", marginTop: 20, marginBottom: 10 },
  text: { fontSize: 16, color: "#444", marginBottom: 10 },
  bold: { fontWeight: "bold" },
  item: { fontSize: 16, marginBottom: 5 },
  button: {
    marginTop: 30,
    backgroundColor: "#d9534f",
    padding: 15,
    borderRadius: 8,
    alignItems: "center"
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  secondaryButton: {
    marginTop: 15,
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center"
  },
  secondaryText: { color: "#fff", fontSize: 16, fontWeight: "600" }
});
