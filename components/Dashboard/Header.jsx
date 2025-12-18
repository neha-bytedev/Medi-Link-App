import { View, Text, StyleSheet } from "react-native";
import { useUser } from "../../context/UserContext";
import { Ionicons } from "@expo/vector-icons";

export default function Header({ emoji = "👩‍⚕️" }) {
  const { username } = useUser();
  const displayName = username || "Guest";

  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Text style={styles.greeting}>Hello, {displayName}</Text>
        <Text style={styles.subGreeting}>Welcome to your health dashboard</Text>
      </View>
      <View style={styles.profileIcon}>
        <Ionicons name="person" size={24} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#327576",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  headerContent: { flex: 1 },
  greeting: { 
    fontSize: 28, 
    fontWeight: "bold", 
    color: "white", 
    marginBottom: 4,
    letterSpacing: 0.5 
  },
  subGreeting: { 
    fontSize: 14, 
    color: "rgba(255,255,255,0.85)",
    fontWeight: "500" 
  },
  profileIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "rgba(255,255,255,0.15)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.2)",
  },
});