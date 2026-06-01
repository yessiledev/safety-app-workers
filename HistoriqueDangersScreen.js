import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';

export default function HistoriqueDangersScreen() {
  const [dangers, setDangers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/dangers")
      .then(res => res.json())
      .then(data => {
        setDangers(data.reverse()); // le plus récent en premier
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text>Chargement...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Historique des signalements</Text>

      {dangers.length === 0 && (
        <Text style={styles.empty}>Aucun danger signalé pour le moment.</Text>
      )}

      {dangers.map((d, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.date}>
            {new Date(d.date).toLocaleString("fr-FR")}
          </Text>
          <Text style={styles.description}>{d.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#f5f5f5" },
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 20 },
  empty: { fontSize: 16, color: "#777", marginTop: 20 },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd"
  },
  date: { fontSize: 14, color: "#555", marginBottom: 5 },
  description: { fontSize: 16, color: "#333" }
});
