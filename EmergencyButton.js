import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function EmergencyButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.button}
      onPress={() => navigation.navigate("AssistantIA")}
    >
      <Text style={styles.text}>Je ne le sens pas</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#ff9800",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 30,
    elevation: 5
  },
  text: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14
  }
});
