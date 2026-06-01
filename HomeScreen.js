import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen() {
  const poste = "Manutentionnaire";
  const risques = [
    "Troubles musculo-squelettiques",
    "Chutes de plain-pied",
    "Écrasement",
    "Fatigue physique"
  ];
  const epi = [
    "Chaussures de sécurité",
    "Gants anti-coupure",
    "Ceinture lombaire (si nécessaire)"
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Poste du jour</Text>
      <Text style={styles.poste}>{poste}</Text>

      <Text style={styles.sectionTitle}>Risques principaux</Text>
      {risques.map((r, index) => (
        <Text key={index} style={styles.item}>• {r}</Text>
      ))}

      <Text style={styles.sectionTitle}>EPI obligatoires</Text>
      {epi.map((e, index) => (
        <Text key={index} style={styles.item}>• {e}</Text>
      ))}

     <TouchableOpacity 
  style={styles.button}
  onPress={() => navigation.navigate("FicheMetier", { metier: "manutentionnaire" })}
>
  <Text style={styles.buttonText}>Voir la fiche métier</Text>
</TouchableOpacity>
<TouchableOpacity 
  style={styles.button}
  onPress={() => navigation.navigate("ListeMetiers")}
>
  <Text style={styles.buttonText}>Choisir un autre métier</Text>
</TouchableOpacity>
<TouchableOpacity 
  style={styles.button}
  onPress={() => navigation.navigate("DroitRetrait")}
>
  <Text style={styles.buttonText}>Droit de retrait</Text>
</TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5"
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10
  },
  poste: {
    fontSize: 22,
    marginBottom: 20,
    color: "#333"
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 10
  },
  item: {
    fontSize: 16,
    marginBottom: 5,
    color: "#444"
  },
  button: {
    marginTop: 30,
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600"
 },
 <TouchableOpacity 
  style={styles.button}
  onPress={() => navigation.navigate("Checklist")}
>
  <Text style={styles.buttonText}>Faire la check‑list sécurité</Text>
</TouchableOpacity>


<TouchableOpacity 
  style={styles.button}
  onPress={() => navigation.navigate("FicheMetier", { metier: "manutentionnaire" })}
>
  <Text style={styles.buttonText}>Voir la fiche métier</Text>
</TouchableOpacity>
<TouchableOpacity 
  style={styles.button}
  onPress={() => navigation.navigate("SignalerDanger")}
>
  <Text style={styles.buttonText}>Signaler un danger</Text>
</TouchableOpacity>
<TouchableOpacity 
  style={styles.button}
  onPress={() => navigation.navigate("HistoriqueDangers")}
>
  <Text style={styles.buttonText}>Historique des signalements</Text>
</TouchableOpacity>
<TouchableOpacity 
  style={styles.button}
  onPress={() => navigation.navigate("DroitRetrait")}
>
  <Text style={styles.buttonText}>Droit de retrait</Text>
</TouchableOpacity>


});

