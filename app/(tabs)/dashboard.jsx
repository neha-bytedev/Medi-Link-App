import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Dashboard() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome to Medi-Link</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Patient Details</Text>
        <Text>Name: Neha Sharma</Text>
        <Text>Age: 22</Text>
        <Text>Blood Group: B+</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Allergies</Text>
        <Text>Penicillin</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Medications</Text>
        <Text>Paracetamol, Vitamin D</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
});
