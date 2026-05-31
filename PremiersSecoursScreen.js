import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PremiersSecoursScreen() {
  const navigation = useNavigation();

  const gestes = [
    { titre: "PLS (Position Latérale de Sécurité)", texte: "Permet de maintenir les voies respiratoires dégagées en attendant les secours." },
    { titre: "Massage cardiaque", texte: "Appuyer fort et vite au centre de la poitrine (100 à 120 compressions/min)." },
    { titre: "Étouffement", texte: "5 claques dans le dos + 5 compressions abdominales (méthode Heimlich)." },
    { titre: "Hémorragie", texte: "Comprimer fortement la plaie avec un tissu propre ou la main." },
    { titre: "Brûlure", texte: "Passer sous l’eau froide pendant 10 minutes minimum." }
  ];

  const urgences = [
    { nom: "112", usage: "Numéro d’urgence européen (pompiers, ambulance, police)." },
    { nom: "15", usage: "SAMU : urgence médicale." },
    { nom: "18", usage: "Pompiers." }
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Gestes qui sauvent</Text>
      <Text style={styles.subtitle}>Premiers secours</Text>

      {gestes.map((g, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.cardTitle}>{g.titre}</Text>
          <Text style={styles.cardText}>{g.texte}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Numéros d’urgence</Text>

      {urgences.map((u, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.cardTitle}>{u.nom}</Text>
          <Text style={styles.cardText}>{u.usage}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Erreurs à éviter</Text>
      <Text style={styles.item}>• Donner à boire à une personne inconsciente</Text>
      <Text style={styles.item}>• Secouer une victime</Text>
      <Text style={styles.item}>• Retirer un casque après un accident</Text>
      <Text style={styles.item}>• Déplacer une victime sans danger immédiat</Text>

      <Text style={styles.sectionTitle}>Message d’encouragement</Text>
      <Text style={styles.encouragement}>
        Les gestes qui sauvent ne demandent pas de force,  
        juste du courage et un peu de sang‑froid.  
        Tu peux faire la différence.
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

      <Text style={styles.sectionTitle}>Besoin d’aide immédiate ?</Text>

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
  subtitle: { fontSize: 18