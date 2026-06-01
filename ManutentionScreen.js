import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EmergencyButton from '../components/EmergencyButton';

export default function ManutentionScreen() {
  const navigation = useNavigation();

  const gestes = [
    { titre: "Plier les genoux", texte: "Toujours descendre en fléchissant les jambes, jamais en courbant le dos." },
    { titre: "Garder le dos droit", texte: "Le dos doit rester aligné, sans arrondi." },
    { titre: "Porter la charge près du corps", texte: "Plus la charge est proche, moins elle pèse sur la colonne." },
    { titre: "Regarder devant soi", texte: "Ne jamais regarder ses pieds en portant une charge." },
    { titre: "Demander de l’aide", texte: "Si la charge est trop lourde ou encombrante, demander un collègue." }
  ];

  const erreurs = [
    "Tourner le buste en portant",
    "Soulever une charge d’un seul bras",
    "Porter au-dessus des épaules",
    "Faire un mouvement brusque",
    "Porter une charge sans vérifier le chemin"
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Manutention</Text>
      <Text style={styles.subtitle}>Éviter les blessures</Text>

      <Text style={styles.sectionTitle}>Les bons gestes</Text>
      {gestes.map((g, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.cardTitle}>{g.titre}</Text>
          <Text style={styles.cardText}>{g.texte}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Erreurs à éviter</Text>
      {erreurs.map((e, i) => (
        <Text key={i} style={styles.item}>• {e}</Text>
      ))}

      <Text style={styles.sectionTitle}>Reconnaître une charge trop lourde</Text>
      <Text style={styles.item}>• Difficulté à décoller la charge du sol</Text>
      <Text style={styles.item}>• Charge instable ou volumineuse</Text>
      <Text style={styles.item}>• Douleur immédiate dans le dos ou les bras</Text>
      <Text style={styles.item}>• Nécessité de se pencher trop en avant</Text>

      <Text style={styles.sectionTitle}>Message d’encouragement</Text>
      <Text style={styles.encouragement}>
        Bien porter, c’est préserver ton dos pour longtemps.  
        Tu n’as qu’un seul corps : prends-en soin.
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

      <Text style={styles.sectionTitle}>Besoin d’aide ?</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate("AssistantIA")}
      >
        <Text style={styles.buttonText}>Poser une question à l’IA</Text>
      </TouchableOpacity>
          
<TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate("<EmergencyButton/>
")}
      >
        <Text style={styles.buttonText}><EmergencyButton />
</Text>
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
  cardTitle: { fontSize: 18, fontWeight: "600", marginBottom: 5 },
  cardText: { fontSize: 16, color: "#444" },
  item: { fontSize: 16, marginBottom: 5, color: "#444" },
  encouragement: { fontSize: 16, marginVertical: 10, color: "#333" },
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
    marginBottom: 30,
    alignItems: "center"
  },
  buttonSecondaryText: { color: "#fff", fontSize: 16, fontWeight: "600" }
});
