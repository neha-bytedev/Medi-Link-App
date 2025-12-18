import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useUser } from "../../context/UserContext"

const EmergencyIcon = () => (
  <View style={styles.sirenIcon}>
    <View style={styles.sirenLight} />
    <View style={styles.sirenBase} />
  </View>
)

const PhoneIcon = () => (
  <View style={styles.phoneIconContainer}>
    <View style={styles.phoneShape} />
  </View>
)

const Emergency = () => {
  const { user, logout } = useUser()
  
  return (
    <View style={styles.container}>
      <View style={styles.emergencySection}>
        <View style={styles.emergencyCard}>
          <View style={styles.emergencyHeader}>
            <View style={styles.emergencyIconWrapper}>
              <EmergencyIcon />
            </View>
            <View style={styles.emergencyContent}>
              <Text style={styles.emergencyTitle}>Emergency Contact</Text>
              <Text style={styles.emergencySubtitle}>Dr. Sarah Johnson</Text>
              <Text style={styles.emergencySpecialty}>Cardiologist</Text>
            </View>
            <View style={styles.statusBadge}>
              <View style={styles.statusDot} />
              <Text style={styles.statusText}>Available</Text>
            </View>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.emergencyFooter}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Response Time:</Text>
              <Text style={styles.infoValue}>~5 minutes</Text>
            </View>
            <TouchableOpacity 
              style={styles.emergencyButton}
              activeOpacity={0.8}
            >
              <PhoneIcon />
              <Text style={styles.emergencyButtonText}>Call Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Emergency

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emergencySection: {
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  emergencyCard: {
    backgroundColor: "#fff5f5",
    borderRadius: 18,
    padding: 20,
    borderWidth: 2,
    borderColor: "#fecaca",
    shadowColor: "#dc2626",
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  emergencyHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  emergencyIconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#fee2e2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  sirenIcon: {
    width: 24,
    height: 24,
  },
  sirenLight: {
    width: 16,
    height: 10,
    backgroundColor: "#dc2626",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    alignSelf: "center",
  },
  sirenBase: {
    width: 20,
    height: 8,
    backgroundColor: "#dc2626",
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    alignSelf: "center",
    marginTop: 2,
  },
  emergencyContent: {
    flex: 1,
  },
  emergencyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#dc2626",
    marginBottom: 6,
    letterSpacing: 0.3,
  },
  emergencySubtitle: {
    fontSize: 15,
    color: "#991b1b",
    fontWeight: "600",
    marginBottom: 2,
  },
  emergencySpecialty: {
    fontSize: 12,
    color: "#dc2626",
    opacity: 0.8,
    fontWeight: "500",
  },
  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dcfce7",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#86efac",
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#16a34a",
    marginRight: 6,
  },
  statusText: {
    fontSize: 11,
    color: "#16a34a",
    fontWeight: "700",
  },
  divider: {
    height: 1,
    backgroundColor: "#fecaca",
    marginBottom: 16,
  },
  emergencyFooter: {
    gap: 12,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoLabel: {
    fontSize: 13,
    color: "#991b1b",
    fontWeight: "600",
  },
  infoValue: {
    fontSize: 13,
    color: "#dc2626",
    fontWeight: "700",
  },
  emergencyButton: {
    backgroundColor: "#dc2626",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#dc2626",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  phoneIconContainer: {
    marginRight: 10,
  },
  phoneShape: {
    width: 18,
    height: 18,
    borderWidth: 2.5,
    borderColor: "white",
    borderRadius: 4,
    transform: [{ rotate: '20deg' }],
  },
  emergencyButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
})