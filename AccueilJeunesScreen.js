
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EmergencyButton from '../components/EmergencyButton';

export default function AccueilJeunesScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.title}>Ta vie avant tout</Text>
      <Text style={styles.subtitle}>Pour les jeunes, les nouveaux, les intérimaires, les apprentis</Text>

      {/* Bloc drames réels */}
      <View style={styles.cardDanger}>
        <Text style={styles.cardTitle}>Ces accidents n’auraient jamais dû arriver</Text>
        <Text style={styles.cardText}>
          • Un jeune écrasé sous des carcasses de bétail.{"\n"}
          • Un autre brûlé sous du goudron bouillant.{"\n"}
          • Un autre tombé d’un toit en pleine canicule.{"\n\n"}
          Ils n’étaient pas imprudents. Ils étaient seuls, mal encadrés, mal informés.
        </Text>
      </View>

      {/* Bloc règle absolue */}
      <Text style={styles.sectionTitle}>Règle absolue</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Si tu ne comprends pas, tu t’arrêtes.</Text>
        <Text style={styles.cardText}>
          Pas d’explication = pas de travail.{"\n"}
          Pas d’encadrement = pas de travail.{"\n"}
          Pas de sécurité = pas de travail.{"\n\n"}
          Tu sors de la zone, tu consultes l’application, tu appelles quelqu’un de responsable.
        </Text>
      </View>

      {/* Bloc instinct */}
      <Text style={styles.sectionTitle}>Écoute ton instinct</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Si tu ne le sens pas… tu t’écoutes.</Text>
        <Text style={styles.cardText}>
          Malaise, stress, chaleur, fatigue, doute, danger…{"\n"}
          Ton corps te parle.{"\n\n"}
          Tu t’arrêtes. Tu sors. Tu demandes de l’aide.
        </Text>
      </View>

      {/* Bouton d'urgence */}
      <TouchableOpacity 
        style={styles.buttonAlert}
        onPress={() => navigation.navigate("AssistantIA")}
      >
        <Text style={styles.buttonAlertText}>Je ne le sens pas — Aide-moi</Text>
      </TouchableOpacity>

      {/* Bloc ce que ton chef doit faire */}
      <Text style={styles.sectionTitle}>Ce que ton chef DOIT faire</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>
          • T’expliquer clairement la tâche{"\n"}
          • Te montrer les bons gestes{"\n"}
          • Vérifier que tu as compris{"\n"}
          • Te donner les EPI{"\n"}
          • Rester disponible si tu as un doute{"\n"}
          • Ne jamais te laisser seul sur un poste dangereux
        </Text>
      </View>

      {/* Bloc ce que tu n'as pas à accepter */}
      <Text style={styles.sectionTitle}>Ce que tu n’as PAS à accepter</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>
          ✘ Travailler sans explication{"\n"}
          ✘ Travailler seul sur un poste dangereux{"\n"}
          ✘ Travailler en pleine chaleur sans pause{"\n"}
          ✘ Travailler sans EPI{"\n"}
          ✘ “Vas-y, ça ira”{"\n"}
          ✘ “Fais comme tu peux”{"\n"}
          ✘ “T’inquiète, on fait comme ça ici”
        </Text>
      </View>

      {/* Bloc réponse téléphone */}
      <Text style={styles.sectionTitle}>Si quelqu’un te dit :</Text>
      <View style={styles.quoteBoxRed}>
        <Text style={styles.quote}>« Eh le jeune, lâche ton téléphone ! »</Text>
      </View>

      <Text style={styles.sectionTitle}>Tu peux répondre :</Text>
      <View style={styles.quoteBoxGreen}>
        <Text style={styles.quote}>
          « Je consulte les règles de sécurité chef, c’est pour éviter un accident. »
        </Text>
      </View>

