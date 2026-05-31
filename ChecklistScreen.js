import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';

export default function ChecklistScreen() {
  const questions = [
    "Ai‑je reçu tous mes EPI ?",
    "Ai‑je compris les consignes du poste ?",
    "Le poste est‑il sécurisé ?",
    "Y a‑t‑il un danger immédiat autour de moi ?",
    "Suis‑je en état physique de travailler en sécurité ?"
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswer = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleValidate = () => {
    if (answers.includes(null)) {
      Alert.alert("Attention", "Merci de répondre à toutes les questions.");
      return;
    }

    if (answers.includes("non")) {
      Alert.alert(
        "Danger détecté",
        "Tu as indiqué un risque. Préviens ton responsable immédiatement et n'interviens pas tant que la situation n'est pas sécurisée."
      );
    } else {
      Alert.alert("OK", "Ta check‑list est validée. Bonne journée en sécurité !");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Check‑list Sécurité</Text>

      {questions.map((q, index) => (
        <View key={index} style={styles.questionBlock}>
          <Text style={styles.question}>{q}</Text>

          <View style={styles.buttonsRow}>
            <TouchableOpacity
              style={[
                styles.button,
                answers[index] === "oui" && styles.buttonSelectedYes
              ]}
              onPress={() => handleAnswer(index, "oui")}
            >
              <Text style={styles.buttonText}>Oui</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.button,
                answers[index] === "non" && styles.buttonSelectedNo
              ]}
              onPress={() => handleAnswer(index, "non")}
            >
              <Text style={styles.buttonText}>Non</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <TouchableOpacity style={styles.validateButton} onPress={handleValidate}>
        <Text style={styles.validateText}>Valider la check‑list</Text>
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
    marginBottom: 20
  },
  questionBlock: {
    marginBottom: 25
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
    color: "#333"
  },
  buttonsRow: {
    flexDirection: "row",
    gap: 10
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#ddd",
    alignItems: "center"
  },
  buttonSelectedYes: {
    backgroundColor: "#4caf50"
  },
  buttonSelectedNo: {
    backgroundColor: "#f44336"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600"
  },
  validateButton: {
    marginTop: 30,
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center"
  },
  validateText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600"
  }
});
