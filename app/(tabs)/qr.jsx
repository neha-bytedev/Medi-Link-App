"use client";

import { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet, Text, ScrollView, Modal, Alert } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { CameraView, useCameraPermissions } from "expo-camera";

export default function QRSearchBar() {
  const [search, setSearch] = useState("");
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();

  const handleOpenCamera = async () => {
    // Check if we have permission
    if (!permission) {
      return;
    }

    if (!permission.granted) {
      // Request permission
      const { granted } = await requestPermission();
      if (!granted) {
        Alert.alert(
          "Camera Permission Required",
          "Please enable camera access to scan QR codes"
        );
        return;
      }
    }

    // Open camera
    setIsCameraOpen(true);
  };

  const handleBarcodeScanned = ({ type, data }) => {
    setIsCameraOpen(false);
    Alert.alert("QR Code Scanned", `Type: ${type}\nData: ${data}`);
    // Handle the scanned data here
    console.log("Scanned:", type, data);
  };

  return (
    <LinearGradient
      colors={["#327576", "#2a5f60", "#1e4748"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Text style={styles.header}> Welcome to MediLink</Text>
        <Text style={styles.subHeader}>Search or scan to access your records</Text>

        {/* Search Bar */}
        <View style={styles.searchBox}>
          <Ionicons name="search" size={22} color="#327576" style={{ marginHorizontal: 8 }} />
          <TextInput
            style={styles.input}
            placeholder="Search reports, doctors..."
            placeholderTextColor="#999"
            value={search}
            onChangeText={setSearch}
          />
          <TouchableOpacity style={styles.qrBtn} onPress={handleOpenCamera}>
            <Ionicons name="camera" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionCard} activeOpacity={0.8}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="file-document" size={28} color="white" />
            </View>
            <Text style={styles.actionText}>My Reports</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionCard} activeOpacity={0.8}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="calendar-check" size={28} color="white" />
            </View>
            <Text style={styles.actionText}>Appointments</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionCard} activeOpacity={0.8}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="pill" size={28} color="white" />
            </View>
            <Text style={styles.actionText}>Prescriptions</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Documents */}
        <View style={styles.recentDoc}>
          <Text style={styles.recentTitle}>📑 Recent Documents</Text>
          
          <TouchableOpacity style={styles.docCard} activeOpacity={0.8}>
            <View style={styles.docIconContainer}>
              <Ionicons name="document-text" size={28} color="white" />
            </View>
            <View style={{ flex: 1, marginLeft: 14 }}>
              <Text style={styles.docName}>Blood Test Report.pdf</Text>
              <Text style={styles.docTime}>Opened 2 days ago</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.docCard, { opacity: 0.9 }]} activeOpacity={0.8}>
            <View style={[styles.docIconContainer, { opacity: 0.9 }]}>
              <Ionicons name="document-text" size={28} color="white" />
            </View>
            <View style={{ flex: 1, marginLeft: 14 }}>
              <Text style={styles.docName}>X-Ray Scan.pdf</Text>
              <Text style={styles.docTime}>Opened 1 week ago</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        </View>

        {/* Health Stats */}
        <View style={styles.statsSection}>
          <Text style={styles.recentTitle}>📊 Health Overview</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Ionicons name="heart" size={24} color="#327576" />
              <Text style={styles.statValue}>72</Text>
              <Text style={styles.statLabel}>Heart Rate</Text>
            </View>
            <View style={styles.statCard}>
              <MaterialCommunityIcons name="weight" size={24} color="#327576" />
              <Text style={styles.statValue}>65</Text>
              <Text style={styles.statLabel}>Weight (kg)</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Camera Modal */}
      <Modal
        visible={isCameraOpen}
        animationType="slide"
        onRequestClose={() => setIsCameraOpen(false)}
      >
        <View style={styles.cameraContainer}>
          <CameraView
            style={styles.camera}
            facing="back"
            onBarcodeScanned={handleBarcodeScanned}
            barcodeScannerSettings={{
              barcodeTypes: ["qr", "pdf417"],
            }}
          >
            {/* Camera Overlay */}
            <View style={styles.cameraOverlay}>
              <View style={styles.cameraHeader}>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setIsCameraOpen(false)}
                >
                  <Ionicons name="close" size={32} color="white" />
                </TouchableOpacity>
              </View>

              <View style={styles.scanArea}>
                <View style={styles.scanFrame}>
                  <View style={[styles.corner, styles.topLeft]} />
                  <View style={[styles.corner, styles.topRight]} />
                  <View style={[styles.corner, styles.bottomLeft]} />
                  <View style={[styles.corner, styles.bottomRight]} />
                </View>
                <Text style={styles.scanText}>Position QR code within frame</Text>
              </View>
            </View>
          </CameraView>
        </View>
      </Modal>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: "700",
    color: "white",
    marginTop: 50,
    letterSpacing: -0.5,
  },
  subHeader: {
    fontSize: 15,
    color: "rgba(255, 255, 255, 0.85)",
    marginBottom: 24,
    marginTop: 4,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
    marginBottom: 24,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    paddingVertical: 4,
  },
  qrBtn: {
    backgroundColor: "#327576",
    padding: 10,
    borderRadius: 12,
    marginLeft: 8,
    shadowColor: "#327576",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  quickActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 28,
  },
  actionCard: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    marginHorizontal: 4,
    padding: 12,
    borderRadius: 14,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#327576",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    shadowColor: "#327576",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  actionText: {
    marginTop: 2,
    fontSize: 12,
    fontWeight: "700",
    color: "#333",
    textAlign: "center",
  },
  recentDoc: {
    marginBottom: 24,
  },
  recentTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 14,
    letterSpacing: -0.3,
  },
  docCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: 16,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
    marginBottom: 12,
  },
  docIconContainer: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: "#327576",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#327576",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  docName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
    marginBottom: 2,
  },
  docTime: {
    fontSize: 13,
    color: "#666",
  },
  statsSection: {
    marginBottom: 20,
  },
  statsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statCard: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: 20,
    borderRadius: 18,
    alignItems: "center",
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  statValue: {
    fontSize: 28,
    fontWeight: "700",
    color: "#333",
    marginTop: 8,
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 13,
    color: "#666",
    fontWeight: "600",
  },
  // Camera styles
  cameraContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  camera: {
    flex: 1,
  },
  cameraOverlay: {
    flex: 1,
    backgroundColor: "transparent",
  },
  cameraHeader: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  closeButton: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 25,
    padding: 8,
  },
  scanArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scanFrame: {
    width: 250,
    height: 250,
    position: "relative",
  },
  corner: {
    position: "absolute",
    width: 40,
    height: 40,
    borderColor: "white",
  },
  topLeft: {
    top: 0,
    left: 0,
    borderTopWidth: 4,
    borderLeftWidth: 4,
  },
  topRight: {
    top: 0,
    right: 0,
    borderTopWidth: 4,
    borderRightWidth: 4,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: 4,
    borderRightWidth: 4,
  },
  scanText: {
    color: "white",
    fontSize: 16,
    marginTop: 30,
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
});