import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HealthStats() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health Stats</Text>
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <View style={styles.iconContainer}>
            <Ionicons name="heart" size={24} color="#327576" />
          </View>
          <Text style={styles.value}>72 bpm</Text>
          <Text style={styles.label}>Heart Rate</Text>
        </View>
        <View style={styles.statCard}>
          <View style={styles.iconContainer}>
            <Ionicons name="fitness" size={24} color="#327576" />
          </View>
          <Text style={styles.value}>120/80</Text>
          <Text style={styles.label}>Blood Pressure</Text>
        </View>
        <View style={styles.statCard}>
          <View style={styles.iconContainer}>
            <Ionicons name="water" size={24} color="#327576" />
          </View>
          <Text style={styles.value}>98%</Text>
          <Text style={styles.label}>Oxygen</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 20 },
  title: { 
    fontSize: 20, 
    fontWeight: "700", 
    marginBottom: 14,
    color: "#1a1a1a",
    letterSpacing: 0.3
  },
  statsRow: { flexDirection: "row", justifyContent: "space-between" },
  statCard: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    marginHorizontal: 5,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "rgba(50, 117, 118, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  value: { 
    fontSize: 18, 
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 2
  },
  label: { 
    fontSize: 12, 
    color: "#666",
    fontWeight: "500" 
  },
});
