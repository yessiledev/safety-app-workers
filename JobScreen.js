import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import EmergencyButton from '../components/EmergencyButton';

export default function JobScreen({ route }) {
  const { metier } = route.params;

  // Exemple de données (plus tard : API backend)
  const data = {
    manutentionnaire: {
      risques: [
        "Troubles musculo-squelettiques",
        "Chutes de plain-pied",
        "Écrasement",
        "Fatigue physique"
      ],
      epi: [
        "Chaussures de sécurité",
        "Gants anti-coupure",
        "Ceinture lombaire (si nécessaire)"
      ],
      gestes_interdits: [
        "Soulever seul une charge trop lourde",
        "Courir en zone de stockage",
        "Passer sous une charge suspendue"
      ]
    }
  };

  const fiche = data[metier];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Fiche métier</Text>
      <Text style={styles.metier}>{metier}</Text>

      <Text style={styles.sectionTitle}>Risques principaux</Text>
      {fiche.risques.map((r, i) => (
        <Text key={i} style={styles.item}>• {r}</Text>
      ))}

      <Text style={styles.sectionTitle}>EPI obligatoires</Text>
      {fiche.epi.map((e, i) => (
        <Text key={i} style={styles.item}>• {e}</Text>
      ))}

      <Text style={styles.sectionTitle}>Gestes interdits</Text>
      {fiche.gestes_interdits.map((g, i) => (
        <Text key={i} style={styles.item}>• {g}</Text>
      ))}
  <EmergencyButton />

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
  metier: {
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
  }
});
