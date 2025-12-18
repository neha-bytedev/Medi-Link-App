import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const SettingIcon = ({ type }) => {
  const icons = {
    bell: (
      <View style={styles.bellIcon}>
        <View style={styles.bellBody} />
        <View style={styles.bellClapper} />
      </View>
    ),
    lock: (
      <View style={styles.lockIcon}>
        <View style={styles.lockShackle} />
        <View style={styles.lockBody} />
      </View>
    ),
    phone: (
      <View style={styles.phoneIcon}>
        <View style={styles.phoneBody} />
      </View>
    ),
    hospital: (
      <View style={styles.hospitalIcon}>
        <View style={styles.hospitalCross} />
      </View>
    ),
    doctor: (
      <View style={styles.doctorIcon}>
        <View style={styles.doctorHead} />
        <View style={styles.doctorBody} />
      </View>
    ),
    card: (
      <View style={styles.cardIcon}>
        <View style={styles.cardBody} />
        <View style={styles.cardStrip} />
      </View>
    ),
  }
  return icons[type]
}

const Settings = ({ option }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
    
  const settingsOptions = [
    { iconType: "bell", title: "Notifications", subtitle: "Manage your alerts", hasToggle: true },
    { iconType: "lock", title: "Privacy Settings", subtitle: "Control your data", hasToggle: false },
    { iconType: "phone", title: "App Preferences", subtitle: "Customize your experience", hasToggle: false },
    { iconType: "hospital", title: "Medical Records", subtitle: "View your history", hasToggle: false },
    { iconType: "doctor", title: "My Doctors", subtitle: "Manage your healthcare team", hasToggle: false },
    { iconType: "card", title: "Insurance", subtitle: "Update payment info", hasToggle: false },
  ]

  return (
    <View style={styles.container}>
      <View style={styles.settingsSection}>
        <Text style={styles.sectionTitle}>Settings & Preferences</Text>
        <View style={styles.settingsCard}>
          {settingsOptions.map((option, index) => (
            <TouchableOpacity 
              key={index} 
              style={[
                styles.settingItem,
                index === settingsOptions.length - 1 && styles.settingItemLast
              ]}
              activeOpacity={0.7}
            >
              <View style={styles.settingLeft}>
                <View style={styles.settingIconContainer}>
                  <SettingIcon type={option.iconType} />
                </View>
                <View style={styles.settingContent}>
                  <Text style={styles.settingTitle}>{option.title}</Text>
                  <Text style={styles.settingSubtitle}>{option.subtitle}</Text>
                </View>
              </View>
              <View style={styles.settingRight}>
                {option.hasToggle ? (
                  <TouchableOpacity
                    style={[styles.toggle, notificationsEnabled && styles.toggleActive]}
                    onPress={() => setNotificationsEnabled(!notificationsEnabled)}
                    activeOpacity={0.8}
                  >
                    <View style={[styles.toggleThumb, notificationsEnabled && styles.toggleThumbActive]} />
                  </TouchableOpacity>
                ) : (
                  <View style={styles.chevronContainer}>
                    <View style={styles.chevron} />
                  </View>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settingsSection: {
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#327576",
    marginBottom: 18,
    letterSpacing: 0.3,
  },
  settingsCard: {
    backgroundColor: "white",
    borderRadius: 18,
    shadowColor: "#327576",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    overflow: "hidden",
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
  },
  settingItemLast: {
    borderBottomWidth: 0,
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  settingIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#327576" + "10",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  settingContent: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#327576",
    marginBottom: 4,
    letterSpacing: 0.2,
  },
  settingSubtitle: {
    fontSize: 12,
    color: "#94a3b8",
    fontWeight: "500",
  },
  settingRight: {
    alignItems: "center",
    justifyContent: "center",
  },
  toggle: {
    width: 52,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#cbd5e1",
    justifyContent: "center",
    paddingHorizontal: 2,
  },
  toggleActive: {
    backgroundColor: "#327576",
  },
  toggleThumb: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "white",
    alignSelf: "flex-start",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  toggleThumbActive: {
    alignSelf: "flex-end",
  },
  chevronContainer: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  chevron: {
    width: 8,
    height: 8,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#94a3b8",
    transform: [{ rotate: '-45deg' }],
  },
  // Icon Styles
  bellIcon: {
    width: 20,
    height: 20,
  },
  bellBody: {
    width: 16,
    height: 14,
    borderWidth: 2,
    borderColor: "#327576",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginLeft: 2,
  },
  bellClapper: {
    width: 4,
    height: 4,
    backgroundColor: "#327576",
    borderRadius: 2,
    alignSelf: "center",
  },
  lockIcon: {
    width: 20,
    height: 20,
  },
  lockShackle: {
    width: 12,
    height: 8,
    borderWidth: 2,
    borderColor: "#327576",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomWidth: 0,
    alignSelf: "center",
  },
  lockBody: {
    width: 16,
    height: 10,
    backgroundColor: "#327576",
    borderRadius: 3,
    alignSelf: "center",
  },
  phoneIcon: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  phoneBody: {
    width: 14,
    height: 18,
    borderWidth: 2,
    borderColor: "#327576",
    borderRadius: 4,
  },
  hospitalIcon: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  hospitalCross: {
    width: 16,
    height: 16,
    backgroundColor: "#327576",
    borderRadius: 2,
  },
  doctorIcon: {
    width: 20,
    height: 20,
  },
  doctorHead: {
    width: 8,
    height: 8,
    backgroundColor: "#327576",
    borderRadius: 4,
    alignSelf: "center",
  },
  doctorBody: {
    width: 14,
    height: 10,
    backgroundColor: "#327576",
    borderRadius: 3,
    alignSelf: "center",
    marginTop: 2,
  },
  cardIcon: {
    width: 20,
    height: 20,
    justifyContent: "center",
  },
  cardBody: {
    width: 18,
    height: 14,
    borderWidth: 2,
    borderColor: "#327576",
    borderRadius: 3,
  },
  cardStrip: {
    position: "absolute",
    width: 18,
    height: 3,
    backgroundColor: "#327576",
    top: 5,
  },
})