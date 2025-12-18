import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const users = [
  { id: "1", name: "Dr. Meera", role: "Cardiologist", image: "https://t4.ftcdn.net/jpg/03/20/74/45/240_F_320744517_TaGkT7aRlqqWdfGUuzRKDABtFEoN5CiO.jpg" },
  { id: "2", name: "Dr. Rohan", role: "Nutritionist", image: "https://t4.ftcdn.net/jpg/02/57/48/67/240_F_257486764_GnnrHRNIBV93mAwR0aiNkS0x5UjDfIcl.jpg" },
];

export default function SuggestedUsers() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suggested Experts</Text>
      <FlatList
        horizontal
        data={users}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.avatarContainer}>
              <Image source={{ uri: item.image }} style={styles.avatar} />
              <View style={styles.badge}>
                <Ionicons name="checkmark" size={12} color="white" />
              </View>
            </View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.role}>{item.role}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 20, marginBottom: 20 },
  title: { 
    fontSize: 20, 
    fontWeight: "700", 
    marginBottom: 14,
    color: "#1a1a1a",
    letterSpacing: 0.3
  },
  card: {
    width: 130,
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 16,
    marginRight: 12,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  avatarContainer: {
    position: "relative",
    marginBottom: 10,
  },
  avatar: { 
    width: 56, 
    height: 56, 
    borderRadius: 28,
    borderWidth: 2,
    borderColor: "#327576",
  },
  badge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#327576",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
  },
  name: { 
    fontSize: 14, 
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 2
  },
  role: { 
    fontSize: 12, 
    color: "#666",
    fontWeight: "500"
  },
});

