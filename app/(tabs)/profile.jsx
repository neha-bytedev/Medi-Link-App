"use client"
import { ScrollView, StyleSheet, View, TouchableOpacity, Text } from "react-native"
import { useUser } from "../../context/UserContext"

import ProfileHeader from "../../components/Profile/ProfileHeader"
import HealthStatsGrid from "../../components/Profile/HealthStatsGrid"
import QuickAction from "../../components/Profile/QuickAction"
import Settings from "../../components/Profile/Settings"
import Emergency from "../../components/Profile/Emergency"

const LogoutIcon = () => (
  <View style={styles.logoutIconContainer}>
    <View style={styles.logoutArrow} />
    <View style={styles.logoutDoor} />
  </View>
)

export default function ProfileScreen() {
  const { user, logout } = useUser()

  const healthStats = [
    { icon: "❤️", title: "Heart Rate", value: "72 BPM", status: "Normal", color: "#ef4444" },
    { icon: "🚶", title: "Steps Today", value: "8,547", status: "Goal: 10,000", color: "#327576" },
    { icon: "😴", title: "Sleep", value: "7h 23m", status: "Good", color: "#3b82f6" },
    { icon: "💧", title: "Water Intake", value: "6/8 glasses", status: "Almost there", color: "#06b6d4" },
  ]

  const settingsOptions = [
    { icon: "🔔", title: "Notifications", subtitle: "Manage your alerts", hasToggle: true },
    { icon: "🔒", title: "Privacy Settings", subtitle: "Control your data", hasToggle: false },
    { icon: "📱", title: "App Preferences", subtitle: "Customize your experience", hasToggle: false },
    { icon: "🏥", title: "Medical Records", subtitle: "View your history", hasToggle: false },
  ]

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ProfileHeader user={user} />
      <HealthStatsGrid stats={healthStats} />
      <QuickAction />
      <Settings options={settingsOptions} />
      <Emergency />
      
      {/* Sign Out */}
      <View style={styles.signOutSection}>
        <TouchableOpacity 
          style={styles.signOutButton} 
          onPress={logout}
          activeOpacity={0.7}
        >
          <LogoutIcon />
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
        <Text style={styles.versionText}>Version 2.1.0</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#f8fafc" 
  },
  signOutSection: { 
    paddingHorizontal: 20, 
    paddingBottom: 40,
    alignItems: "center",
  },
  signOutButton: {
    backgroundColor: "white", 
    borderRadius: 15, 
    padding: 16,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderWidth: 1.5, 
    borderColor: "#fecaca",
    shadowColor: "#dc2626",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  logoutIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
  },
  logoutArrow: {
    width: 16,
    height: 2,
    backgroundColor: "#dc2626",
    position: "relative",
  },
  logoutDoor: {
    width: 12,
    height: 16,
    borderWidth: 2,
    borderColor: "#dc2626",
    borderRadius: 2,
    marginLeft: 4,
  },
  signOutText: { 
    fontSize: 16, 
    color: "#dc2626", 
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  versionText: {
    fontSize: 12,
    color: "#94a3b8",
    marginTop: 16,
    fontWeight: "500",
  },
})