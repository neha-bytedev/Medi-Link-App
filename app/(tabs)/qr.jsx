import { View, Text, StyleSheet } from "react-native";

export default function QR() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>QR Code Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 20 },
});
