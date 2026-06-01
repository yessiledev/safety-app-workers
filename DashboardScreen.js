<TouchableOpacity 
  style={styles.button}
  onPress={() => navigation.navigate("AccueilJeunes")}
>
  <Text style={styles.buttonText}>Ta vie avant tout</Text>
</TouchableOpacity>

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function DashboardScreen() {
  const navigation = useNavigation();
  const [dangerCount, setDangerCount] = useState(null);
  const [loading, setLoading] = useState(true);

  const posteDuJour = "manutentionnaire"; // plus tard : dynamique

  useEffect(() => {
    fetch("http://localhost:3000/dangers")
      .then(res => res.json())
      .then(data => {
        setDangerCount(data.length);
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
      <Text style={styles.title}>Tableau de bord sécurité</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Poste du jour :</Text>
        <Text style={styles.value}>{posteDuJour}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Dangers signalés :</Text>
        <Text style={styles.value}>{dangerCount}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Check‑list sécurité :</Text>
        <Text style={styles.value}>Non effectuée</Text>
      </View>

      <Text style={styles.sectionTitle}>Actions rapides</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate("Checklist")}
      >
        <Text style={styles.buttonText}>Faire la check‑list</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate("FicheMetier", { metier: posteDuJour })}
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

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#f5f5f5" },
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: "600", marginTop: 30, marginBottom: 15 },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd"
  },
  label: { fontSize: 16, color: "#555" },
  value: { fontSize: 20, fontWeight: "bold", color: "#333" },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: "center"
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" }
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
  onPress={() => navigation.navigate("ConsignesSite")}
>
  <Text style={styles.buttonText}>Consignes du site</Text>
</TouchableOpacity>

<TouchableOpacity 
  style={styles.button}
  onPress={() => navigation.navigate("AssistantIA")}
>
  <Text style={styles.buttonText}>Assistant IA</Text>
</TouchableOpacity>
<TouchableOpacity 
  style={styles.button}
  onPress={() => navigation.navigate("EPI")}
>
  <Text style={styles.buttonText}>EPI obligatoires</Text>
</TouchableOpacity>
<TouchableOpacity 
  style={styles.button}
  onPress={() => navigation.navigate("Accident")}
>
  <Text style={styles.buttonText}>Accident du travail : que faire ?</Text>
</TouchableOpacity>
<TouchableOpacity 
  style={styles.button}
  onPress={() => navigation.navigate("SituationsDangereuses")}
>
  <Text style={styles.buttonText}>Reconnaître les dangers</Text>
</TouchableOpacity>
<TouchableOpacity 
  style={styles.button}
  onPress={() => navigation.navigate("Circulation")}
>
  <Text style={styles.buttonText}>Règles de circulation</Text>
</TouchableOpacity>

<TouchableOpacity 
  style={styles.button}
  onPress={() => navigation.navigate("RisquesChimiques")}
>
  <Text style={styles.buttonText}>Risques chimiques</Text>
</TouchableOpacity>
<TouchableOpacity 
  style={styles.button}
  onPress={() => navigation.navigate("RisqueIncendie")}
>
  <Text style={styles.buttonText}>Risque incendie</Text>
</TouchableOpacity>
<TouchableOpacity 
  style={styles.button}
  onPress={() => navigation.navigate("PremiersSecours")}
>
  <Text style={styles.buttonText}>Gestes qui sauvent</Text>
</TouchableOpacity>

<TouchableOpacity 
  style={styles.button}
  onPress={() => navigation.navigate("Manutention")}
>
  <Text style={styles.buttonText}>Manutention</Text>
</TouchableOpacity>
<TouchableOpacity 
  style={styles.button}
  onPress={() => navigation.navigate("TravailHauteur")}
>
  <Text style={styles.buttonText}>Travail en hauteur</Text>
</TouchableOpacity>

<TouchableOpacity 
  style={styles.button}
  onPress={() => navigation.navigate("AmbiancesSonores")}
>
  <Text style={styles.buttonText}>Ambiances sonores</Text>
</TouchableOpacity>
<TouchableOpacity 
  style={styles.button}
  onPress={() => navigation.navigate("AmbiancesThermiques")}
>
  <Text style={styles.buttonText}>Ambiances thermiques</Text>
</TouchableOpacity>
<TouchableOpacity 
  style={styles.button}
  onPress={() => navigation.navigate("ProduitsDangereux")}
>
  <Text style={styles.buttonText}>Produits dangereux</Text>
</TouchableOpacity>
<TouchableOpacity 
  style={styles.button}
  onPress={() => navigation.navigate("EquipementsTravail")}
>
  <Text style={styles.buttonText}>Équipements de travail</Text>
</TouchableOpacity>
<TouchableOpacity 
  style={styles.button}
  onPress={() => navigation.navigate("ZonesInterdites")}
>
  <Text style={styles.buttonText}>Zones interdites</Text>
</TouchableOpacity>
<TouchableOpacity 
  style={styles.button}
  onPress={() => navigation.navigate("ConduiteEngins")}
>
  <Text style={styles.buttonText}>Conduite d'engins</Text>
</TouchableOpacity>
<TouchableOpacity 
  style={styles.button}
  onPress={() => navigation.navigate("TravailIsole")}
>
  <Text style={styles.buttonText}>Travail isolé</Text>
</TouchableOpacity>


});
