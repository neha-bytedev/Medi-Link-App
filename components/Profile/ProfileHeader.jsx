import { View, Text, Image, StyleSheet } from "react-native"
import { useUser } from "../../context/UserContext"

export default function ProfileHeader() {
  const { user } = useUser()
  
  return (
    <View style={styles.headerBackground}>
      <View style={styles.profileSection}>
        <View style={styles.profileImageContainer}>
          <Image source={{ uri: "" }} style={styles.profileImageLarge} />
          <View style={styles.statusIndicator} />
        </View>
        <Text style={styles.userName}>{user?.username || "Guest User"}</Text>
        <Text style={styles.userSubtitle}>Patient ID: #{user?.id || "N/A"}</Text>
        <View style={styles.membershipBadge}>
          <View style={styles.crownIcon}>
            <Text style={styles.crownText}>★</Text>
          </View>
          <Text style={styles.membershipText}>Premium Member</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerBackground: {
    backgroundColor: "#327576",
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  profileSection: { 
    alignItems: "center" 
  },
  profileImageContainer: {
    position: "relative",
    marginBottom: 15,
  },
  profileImageLarge: {
    width: 110, 
    height: 110, 
    borderRadius: 55,
    borderWidth: 5, 
    borderColor: "white",
  },
  statusIndicator: {
    position: "absolute",
    bottom: 5,
    right: 5,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#4ade80",
    borderWidth: 3,
    borderColor: "white",
  },
  userName: { 
    fontSize: 26, 
    fontWeight: "bold", 
    color: "white", 
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  userSubtitle: { 
    fontSize: 14, 
    color: "rgba(255,255,255,0.85)", 
    marginBottom: 18,
    fontWeight: "500",
  },
  membershipBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.25)",
    paddingHorizontal: 24, 
    paddingVertical: 10,
    borderRadius: 25, 
    borderWidth: 1.5, 
    borderColor: "rgba(255,255,255,0.4)",
  },
  crownIcon: {
    marginRight: 8,
  },
  crownText: {
    color: "#fbbf24",
    fontSize: 16,
    fontWeight: "bold",
  },
  membershipText: { 
    color: "white", 
    fontSize: 13, 
    fontWeight: "700",
    letterSpacing: 0.5,
  }
})