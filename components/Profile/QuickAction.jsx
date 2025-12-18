import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const ActionIcon = ({ type }) => {
  const icons = {
    calendar: (
      <View style={styles.calendarIcon}>
        <View style={styles.calendarTop} />
        <View style={styles.calendarBody} />
      </View>
    ),
    pill: (
      <View style={styles.pillIcon}>
        <View style={styles.pillShape} />
        <View style={styles.pillDot} />
      </View>
    ),
    clipboard: (
      <View style={styles.clipboardIcon}>
        <View style={styles.clipboardClip} />
        <View style={styles.clipboardBody} />
      </View>
    ),
    emergency: (
      <View style={styles.emergencyIcon}>
        <View style={styles.crossVertical} />
        <View style={styles.crossHorizontal} />
      </View>
    ),
  }
  return icons[type]
}

const QuickAction = () => {
  const actions = [
    { type: 'calendar', title: 'Book\nAppointment', color: '#327576' },
    { type: 'pill', title: 'Medications', color: '#327576' },
    { type: 'clipboard', title: 'Test Results', color: '#327576' },
    { type: 'emergency', title: 'Emergency', color: '#dc2626' },
  ]

  return (
    <View style={styles.quickActionsSection}>
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.quickActionsGrid}>
        {actions.map((action, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.quickActionCard}
            activeOpacity={0.7}
          >
            <View style={[styles.quickActionIcon, { backgroundColor: action.color + "15" }]}>
              <ActionIcon type={action.type} />
            </View>
            <Text style={[styles.quickActionText, { color: action.color }]}>
              {action.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default QuickAction

const styles = StyleSheet.create({
  quickActionsSection: {
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
  quickActionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
  },
  quickActionCard: {
    backgroundColor: "white",
    borderRadius: 18,
    padding: 20,
    width: "47%",
    alignItems: "center",
    shadowColor: "#327576",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    minHeight: 130,
    justifyContent: "center",
  },
  quickActionIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  quickActionText: {
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 18,
    letterSpacing: 0.2,
  },
  // Calendar Icon
  calendarIcon: {
    width: 24,
    height: 24,
  },
  calendarTop: {
    width: 24,
    height: 6,
    backgroundColor: "#327576",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  calendarBody: {
    width: 24,
    height: 18,
    borderWidth: 2,
    borderColor: "#327576",
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    marginTop: -2,
  },
  // Pill Icon
  pillIcon: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  pillShape: {
    width: 24,
    height: 12,
    borderWidth: 2.5,
    borderColor: "#327576",
    borderRadius: 12,
  },
  pillDot: {
    position: "absolute",
    width: 4,
    height: 4,
    backgroundColor: "#327576",
    borderRadius: 2,
    top: 10,
    left: 6,
  },
  // Clipboard Icon
  clipboardIcon: {
    width: 24,
    height: 24,
  },
  clipboardClip: {
    width: 10,
    height: 4,
    backgroundColor: "#327576",
    borderRadius: 2,
    alignSelf: "center",
    marginBottom: 2,
  },
  clipboardBody: {
    width: 20,
    height: 18,
    borderWidth: 2,
    borderColor: "#327576",
    borderRadius: 4,
    alignSelf: "center",
  },
  // Emergency Icon (Cross)
  emergencyIcon: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  crossVertical: {
    position: "absolute",
    width: 4,
    height: 20,
    backgroundColor: "#dc2626",
    borderRadius: 2,
  },
  crossHorizontal: {
    position: "absolute",
    width: 20,
    height: 4,
    backgroundColor: "#dc2626",
    borderRadius: 2,
  },
})