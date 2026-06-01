import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EmergencyButton from '../components/EmergencyButton';

export default function ModeJeuneRecrueEtape5() {
  const navigation = useNavigation();

  const questions = [
    {
      question: "Si tu ne comprends pas une tâche, tu dois :",
      options: [
        "Essayer quand même",
        "Demander qu’on t’explique",
        "Regarder comment font les autres sans rien dire"
      ],
      correct: 1
    },
    {
      question: "Si tu ne le sens pas, tu dois :",
      options: [
        "Continuer pour ne pas déranger",
        "T’arrêter et sortir de la zone",
        "Attendre que ça passe"
      ],
      correct: 1
    },
    {
      question: "Ton chef doit :",
      options: [
        "Te laisser te débrouiller",
        "T’expliquer, te montrer et vérifier",
        "Te mettre sur un poste dangereux seul"
      ],
      correct: 1
    }
  ];

  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (index) => {
    if (index === questions[step].correct) {
      setScore(score + 1);
    }

    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.title}>Étape 5</Text>
      <Text style={styles.subtitle}>Mini‑quiz final</Text>

      {!finished ? (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{questions[step].question}</Text>

          {questions[step].options.map((opt, i) => (
            <TouchableOpacity 
              key={i}
              style={styles.option}
              onPress={() => handleAnswer(i)}
            >
              <Text style={styles.optionText}>{opt}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <View style={styles.cardSuccess}>
          <Text style={styles.cardTitle}>Bravo ! 🎉</Text>
          <Text style={styles.cardText}>
            Tu as terminé le Mode Jeune Recrue.{"\n\n"}
            Tu connais maintenant les règles essentielles pour travailler en sécurité.
          </Text>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>🎖️ Je suis prêt à travailler en sécurité</Text>
          </View>

          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate("Dashboard")}
          >
            <Text style={styles.buttonText}>Retour au menu</Text>
          </TouchableOpacity>
        </View>
      )}

      <EmergencyButton />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 5 },
  subtitle: { fontSize: 18
