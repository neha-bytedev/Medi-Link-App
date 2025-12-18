import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RemindersList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reminders</Text>
      <View style={styles.reminderCard}>
        <View style={styles.iconContainer}>
          <Ionicons name="medical" size={20} color="#327576" />
        </View>
        <Text style={styles.text}>Take Vitamin D - 8:00 AM</Text>
      </View>
      <View style={styles.reminderCard}>
        <View style={styles.iconContainer}>
          <Ionicons name="walk" size={20} color="#327576" />
        </View>
        <Text style={styles.text}>Evening Walk - 6:00 PM</Text>
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
  reminderCard: {
    backgroundColor: "#E8F5F5",
    padding: 14,
    borderRadius: 14,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    borderWidth: 1,
    borderColor: "rgba(50, 117, 118, 0.1)",
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(50, 117, 118, 0.15)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  text: { 
    fontSize: 14,
    color: "#1a1a1a",
    fontWeight: "500",
    flex: 1
  },
});
