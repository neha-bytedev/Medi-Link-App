import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ConnectionsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="people" size={64} color="#327576" />
      </View>
      <Text style={styles.title}>Connections Screen</Text>
      <Text style={styles.subtitle}>Connect with health professionals</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center",
    backgroundColor: "#F8FAFD",
    padding: 20
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "rgba(50, 117, 118, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  title: { 
    fontSize: 24,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 8
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    fontWeight: "500"
  }
});

