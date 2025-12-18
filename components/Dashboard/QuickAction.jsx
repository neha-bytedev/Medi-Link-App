import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const ActionCard = ({ icon, label, bg, path }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.actionCard, { backgroundColor: bg }]}
      onPress={() => navigation.navigate(path)}
    >
      <View style={styles.actionIconContainer}>
        <Ionicons name={icon} size={26} color="#327576" />
      </View>
      <Text style={styles.actionText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default function QuickActions() {
  return (
    <View style={styles.quickActions}>
      <ActionCard icon="document-text" label="My Reports" bg="#E8F5F5" path="Reports" />
      <ActionCard icon="alarm" label="Reminders" bg="#FFF9E6" path="Reminders" />
      <ActionCard icon="people" label="Connections" bg="#F0F0F0" path="Connections" />
    </View>
  );
}

const styles = StyleSheet.create({
  quickActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  actionCard: {
    width: (width - 60) / 3,
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
  },
  actionIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "rgba(255,255,255,0.8)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "rgba(50, 117, 118, 0.1)",
  },
  actionText: { 
    fontSize: 12, 
    fontWeight: "600", 
    textAlign: "center",
    color: "#1a1a1a",
    letterSpacing: 0.2
  },
});
