import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useUser } from "../../context/UserContext";

const PRIMARY = '#327576';
const SECONDARY = '#1a3a3b';
const ACCENT = '#45a29e';

export default function SignupScreen() {
  const router = useRouter();
  const { setUsername } = useUser();
  const [username, setLocalUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = () => {
    if (username && password && confirmPassword) {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      setUsername(username);
      router.replace("/(tabs)/dashboard");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <LinearGradient
      colors={['#0a1415', '#1a3a3b', '#327576']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      {/* Decorative elements */}
      <View style={styles.decorCircle1} />
      <View style={styles.decorCircle2} />

      <View style={styles.card}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Ionicons name="shield-checkmark" size={48} color={PRIMARY} />
          <Text style={styles.logoText}>Medi-Link</Text>
        </View>

        {/* Tabs */}
        <View style={styles.tabRow}>
          <TouchableOpacity 
            onPress={() => router.push("/(auth)/login")}
            style={styles.tab}
          >
            <Text style={styles.tabText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.tabActive}>
            <Text style={styles.tabTextActive}>Signup</Text>
            <View style={styles.activeIndicator} />
          </View>
        </View>

        {/* Username Input */}
        <View style={styles.inputWrapper}>
          <Ionicons name="person-outline" size={20} color={ACCENT} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#8ba5a6"
            value={username}
            onChangeText={setLocalUsername}
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputWrapper}>
          <Ionicons name="lock-closed-outline" size={20} color={ACCENT} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#8ba5a6"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons 
              name={showPassword ? "eye-off-outline" : "eye-outline"} 
              size={20} 
              color={ACCENT} 
            />
          </TouchableOpacity>
        </View>

        {/* Confirm Password Input */}
        <View style={styles.inputWrapper}>
          <Ionicons name="lock-closed-outline" size={20} color={ACCENT} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#8ba5a6"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Ionicons 
              name={showConfirmPassword ? "eye-off-outline" : "eye-outline"} 
              size={20} 
              color={ACCENT} 
            />
          </TouchableOpacity>
        </View>

        {/* Signup Button */}
        <TouchableOpacity style={styles.signupBtn} onPress={handleSignup}>
          <LinearGradient
            colors={[PRIMARY, ACCENT]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.signupGradient}
          >
            <Text style={styles.signupText}>CREATE ACCOUNT</Text>
            <Ionicons name="arrow-forward" size={20} color="#fff" />
          </LinearGradient>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Social Signup */}
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialBtn}>
            <Ionicons name="logo-google" size={26} color={PRIMARY} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <Ionicons name="logo-facebook" size={26} color={PRIMARY} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <Ionicons name="logo-apple" size={26} color={PRIMARY} />
          </TouchableOpacity>
        </View>

        {/* Terms */}
        <Text style={styles.termsText}>
          By signing up, you agree to our{' '}
          <Text style={styles.termsLink}>Terms & Conditions</Text>
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  decorCircle1: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: 'rgba(69,162,158,0.1)',
    top: -80,
    right: -100,
  },
  decorCircle2: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'rgba(69,162,158,0.08)',
    bottom: -60,
    left: -70,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: 24,
    padding: 30,
    width: "90%",
    alignItems: "center",
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 15,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: PRIMARY,
    marginTop: 8,
    letterSpacing: 0.5,
  },
  tabRow: {
    flexDirection: "row",
    marginBottom: 28,
    width: "100%",
    justifyContent: "center",
  },
  tab: {
    marginHorizontal: 20,
    paddingVertical: 8,
  },
  tabText: {
    fontSize: 16,
    color: "#8ba5a6",
    fontWeight: '500',
  },
  tabActive: {
    marginHorizontal: 20,
    paddingVertical: 8,
    position: 'relative',
  },
  tabTextActive: {
    fontSize: 16,
    color: SECONDARY,
    fontWeight: '700',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: PRIMARY,
    borderRadius: 2,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: '#f0f7f7',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginBottom: 16,
    width: "100%",
    borderWidth: 1,
    borderColor: '#d4e4e5',
  },
  icon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 15,
    color: SECONDARY,
  },
  signupBtn: {
    width: "100%",
    marginBottom: 20,
    borderRadius: 12,
    overflow: 'hidden',
  },
  signupGradient: {
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
  },
  signupText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
    letterSpacing: 0.5,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#d4e4e5',
  },
  dividerText: {
    color: "#8ba5a6",
    marginHorizontal: 16,
    fontSize: 13,
    fontWeight: '600',
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginBottom: 20,
  },
  socialBtn: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#f0f7f7',
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#d4e4e5',
  },
  termsText: {
    fontSize: 12,
    color: '#5a7875',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  termsLink: {
    color: PRIMARY,
    fontWeight: '600',
  },
});