import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Modal,
  Platform,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Reminders() {
  const [reminders, setReminders] = useState([
    { id: "1", name: "Take Vitamin D", date: "8:00 AM" },
    { id: "2", name: "Evening Walk", date: "6:00 PM" },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newReminder, setNewReminder] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const addReminder = () => {
    if (!newReminder.trim()) return;
    const formatted = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setReminders((prev) => [
      ...prev,
      { id: Date.now().toString(), name: newReminder.trim(), date: formatted },
    ]);
    setNewReminder("");
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Reminders</Text>

      <FlatList
        data={reminders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.reminderCard}>
            <View style={styles.iconContainer}>
              <Ionicons name="alarm" size={24} color="#327576" />
            </View>
            <View style={{ marginLeft: 12, flex: 1 }}>
              <Text style={styles.reminderName}>{item.name}</Text>
              <Text style={styles.reminderDate}>{item.date}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="alarm-outline" size={48} color="#ccc" />
            <Text style={styles.emptyText}>No reminders yet</Text>
          </View>
        }
      />

      <TouchableOpacity style={styles.addBtn} onPress={() => setModalVisible(true)}>
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Add Reminder</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={24} color="#666" />
              </TouchableOpacity>
            </View>

            <TextInput
              placeholder="Reminder name"
              placeholderTextColor="#999"
              style={styles.input}
              value={newReminder}
              onChangeText={setNewReminder}
            />

            <TouchableOpacity
              style={styles.dateBtn}
              onPress={() => setShowDatePicker(true)}
            >
              <Ionicons name="time" size={22} color="#327576" />
              <Text style={styles.dateText}>
                {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </Text>
            </TouchableOpacity>

            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="time"
                display={Platform.OS === "ios" ? "spinner" : "default"}
                onChange={(e, selected) => {
                  setShowDatePicker(false);
                  if (selected) setDate(selected);
                }}
              />
            )}

            <View style={styles.modalActions}>
              <TouchableOpacity
                style={[styles.actionBtn, styles.cancelBtn]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.actionBtn, styles.saveBtn]}
                onPress={addReminder}
              >
                <Text style={styles.saveText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#F8FAFD" },
  header: { 
    fontSize: 24, 
    fontWeight: "700", 
    marginBottom: 20,
    color: "#1a1a1a",
    letterSpacing: 0.3
  },
  reminderCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "rgba(50, 117, 118, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  reminderName: { 
    fontSize: 16, 
    fontWeight: "600", 
    color: "#1a1a1a",
    marginBottom: 4
  },
  reminderDate: { 
    fontSize: 13, 
    color: "#666",
    fontWeight: "500"
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },
  emptyText: {
    marginTop: 12,
    fontSize: 16,
    color: "#999",
    fontWeight: "500"
  },
  addBtn: {
    position: "absolute",
    bottom: 28,
    right: 18,
    backgroundColor: "#327576",
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
    shadowColor: "#327576",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  modalOverlay: { 
    flex: 1, 
    justifyContent: "flex-end", 
    backgroundColor: "rgba(0,0,0,0.4)" 
  },
  modalCard: { 
    backgroundColor: "#fff", 
    padding: 24, 
    borderTopLeftRadius: 24, 
    borderTopRightRadius: 24 
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  modalTitle: { 
    fontSize: 20, 
    fontWeight: "700",
    color: "#1a1a1a",
    letterSpacing: 0.3
  },
  input: { 
    borderWidth: 1, 
    borderColor: "#e0e0e0", 
    borderRadius: 12, 
    padding: 14,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: "#fafafa",
    color: "#1a1a1a"
  },
  dateBtn: { 
    flexDirection: "row", 
    alignItems: "center", 
    padding: 14, 
    backgroundColor: "rgba(50, 117, 118, 0.08)", 
    borderRadius: 12, 
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "rgba(50, 117, 118, 0.15)",
  },
  dateText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#1a1a1a",
    fontWeight: "600"
  },
  modalActions: { 
    flexDirection: "row", 
    justifyContent: "space-between",
    gap: 12
  },
  actionBtn: { 
    flex: 1, 
    padding: 16, 
    borderRadius: 12, 
    alignItems: "center",
    elevation: 1
  },
  cancelBtn: {
    backgroundColor: "#f5f5f5",
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  saveBtn: {
    backgroundColor: "#327576",
  },
  cancelText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#666"
  },
  saveText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff"
  }
});
