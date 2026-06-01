import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EmergencyButton from '../components/EmergencyButton';

export default function FormationScreen() {
  const navigation = useNavigation();

  const formations = [
    {
      id: 1,
      titre: "Les bases de la sécurité",
      points: [
        "Toujours porter ses EPI",
        "Signaler immédiatement un danger",
        "Ne jamais courir en zone de travail",
        "Respecter les limites de charge",
        "Garder une posture sécurisée"
      ]
    },
    {
      id: 2,
      titre: "Gestes et postures",
      points: [
        "Plier les genoux pour soulever",
        "Garder le dos droit",
        "Porter la charge près du corps",
        "Ne jamais pivoter en portant",
        "Demander de l’aide si nécessaire"
      ]
    },
    {
      id: 3,
      titre: "Sécurité incendie",
      points: [
        "Repérer les issues de secours",
        "Ne jamais bloquer une sortie",
        "Savoir utiliser un extincteur",
        "Alerter avant d’intervenir",
        "Évacuer calmement"
      ]
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Formation Sécurité</Text>

      {formations.map((f) => (
        <View key={f.id} style={styles.card}>
          <Text style={styles.cardTitle}>{f.titre}</Text>

          {f.points.map((p, i) => (
            <Text key={i} style={styles.item}>• {p}</Text>
          ))}

          <TouchableOpacity 
            style={styles.button}
            onPress={() => alert("Formation validée !")}
          >
            <Text style={styles.buttonText}>Valider la formation</Text>
          </TouchableOpacity>
        </View>
<EmergencyButton />

      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ddd"
  },
  cardTitle: { fontSize: 20, fontWeight: "600", marginBottom: 10 },
  item: { fontSize: 16, marginBottom: 5, color: "#444" },
  button: {
    backgroundColor: "#28a745",
    padding: 12,
    borderRadius: 8,
    marginTop: 15,
    alignItems: "center"
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" }
});

