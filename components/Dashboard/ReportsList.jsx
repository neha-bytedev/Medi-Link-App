import { View, Text, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const reports = [
  { id: "1", title: "Blood Test", date: "Aug 20, 2025" },
  { id: "2", title: "X-Ray Report", date: "Aug 15, 2025" },
];

export default function ReportsList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Reports</Text>
      <FlatList
        data={reports}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.iconContainer}>
              <Ionicons name="document-text" size={22} color="#327576" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.reportTitle}>{item.title}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </View>
        )}
      />
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
  card: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 14,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(50, 117, 118, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  reportTitle: { 
    fontSize: 16, 
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 2
  },
  date: { 
    fontSize: 12, 
    color: "#666",
    fontWeight: "500"
  },
});