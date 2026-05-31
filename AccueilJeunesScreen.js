import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AccueilJeunesScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Ta vie avant tout</Text>
      <Text style={styles.subtitle}>Message pour les jeunes, les nouveaux et les intérimaires</Text>

      <View style={styles.cardDanger}>
        <Text style={styles.cardTitle}>Trois jeunes. Trois drames. Trois vies perdues.</Text>
        <Text style={styles.cardText}>
          • Un jeune écrasé sous des carcasses de bétail.{"\n"}
          • Un autre brûlé sous du goudron bouillant.{"\n"}
          • Un autre tombé d’un toit en pleine canicule.{"\n\n"}
          Ils n’étaient pas imprudents. Ils étaient seuls, mal encadrés, mal informés.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Règle absolue</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Si tu ne comprends pas, tu t’arrêtes.</Text>
        <Text style={styles.cardText}>
          Si personne ne t’a expliqué clairement quoi faire, comment le faire, où te placer, quels risques tu as ou quels EPI porter, tu ne commences pas.
          {"\n\n"}Tu sors de la zone, tu consultes l’application, et tu appelles quelqu’un de responsable.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Écoute ton instinct</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Si tu ne le sens pas… tu t’écoutes.</Text>
        <Text style={styles.cardText}>
          Stress, malaise, fatigue, doute, danger, manque d’encadrement…{"\n"}
          Ton corps te parle. Écoute-le.
          {"\n\n"}Tu t’arrêtes. Tu sors consulter l’application. Tu demandes à une personne compétente.
        </Text>
      </View>

      <TouchableOpacity 
        style={styles.buttonAlert}
        onPress={() => navigation.navigate("AssistantIA")}
      >
        <Text style={styles.buttonAlertText}>Je ne le sens pas — Aide-moi</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Tu n’es jamais censé être seul</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>
          Si tu es jeune, nouveau, intérimaire, apprenti ou stagiaire, tu dois être accompagné, formé, surveillé, encadré.
          {"\n\n"}Si ce n’est pas le cas : tu t’arrêtes, tu sors consulter l’application, tu appelles quelqu’un de responsable.
        </Text>
      </View>

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

      <Text style={styles.sectionTitle}>Message pour toi</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>
          Aucun travail ne mérite ta vie.{"\n"}
          Tu as le droit de comprendre, de demander, de refuser, de sortir, de te protéger.{"\n"}
          Tu as le droit de rentrer chez toi vivant.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Besoin d’aide ?</Text>

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
  title: { fontSize: 30, fontWeight: "bold", marginBottom: 5 },
  subtitle: { fontSize: 18, color: "#555", marginBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: "600", marginTop: 25, marginBottom: 10 },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd"
  },

  cardDanger: {
    backgroundColor: "#ffe5e5",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: "#d32f2f"
  },

  cardTitle: { fontSize: 18, fontWeight: "600", marginBottom: 5 },
  cardText: { fontSize: 16, color: "#444" },

  quoteBoxRed: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#f44336",
    marginBottom: 15
  },

  quoteBoxGreen: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#28a745",
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

  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },

  buttonSecondary: {
    backgroundColor: "#f44336",
    padding: 15,
    borderRadius: 8,
    marginBottom: 40,
    alignItems: "center"
  },

  buttonSecondaryText: { color: "#fff", fontSize: 16, fontWeight: "600" },

  buttonAlert: {
    backgroundColor: "#ff9800",
    padding: 15,
    borderRadius: 8,
    marginVertical: 20,
    alignItems: "center"
  },

  buttonAlertText: { color: "#fff", fontSize: 16, fontWeight: "700" }
});
