import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const PRIMARY = '#327576';
const SECONDARY = '#1a3a3b';
const ACCENT = '#45a29e';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [pressed, setPressed] = useState(false);

  return (
    <LinearGradient
      colors={['#0a1415', '#1a3a3b', '#327576']}
      style={styles.container}
    >
      {/* Decorative elements */}
      <View style={styles.decorLine1} />
      <View style={styles.decorLine2} />

      <View style={styles.card}>
        {/* Logo Area */}
        <View style={styles.logoContainer}>
          <Ionicons name="fitness" size={48} color={PRIMARY} />
          <Text style={styles.logoText}>Medi-Link</Text>
        </View>

        <Text style={styles.heading}>Welcome Back</Text>
        <Text style={styles.subheading}>
          Log in to continue your health journey
        </Text>

        {/* Username Input */}
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color={ACCENT} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#8ba5a6"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color={ACCENT} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#8ba5a6"
            value={password}
            secureTextEntry={!showPassword}
            onChangeText={setPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons 
              name={showPassword ? "eye-off-outline" : "eye-outline"} 
              size={20} 
              color={ACCENT} 
            />
          </TouchableOpacity>
        </View>

        {/* Links Row */}
        <View style={styles.linkRow}>
          <TouchableOpacity style={styles.rememberRow}>
            <View style={styles.checkbox}>
              <Ionicons name="checkmark" size={14} color="#fff" />
            </View>
            <Text style={styles.rememberText}>Remember me</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.buttonWrapper}
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)}
          onPress={() => {/* TODO: login logic */}}
        >
          <LinearGradient
            colors={pressed ? [ACCENT, PRIMARY] : [PRIMARY, ACCENT]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>Log In</Text>
            <Ionicons name="arrow-forward" size={20} color="#fff" />
          </LinearGradient>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Social Login */}
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-google" size={24} color={PRIMARY} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-facebook" size={24} color={PRIMARY} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-apple" size={24} color={PRIMARY} />
          </TouchableOpacity>
        </View>

        {/* Sign Up Link */}
        <TouchableOpacity style={styles.signupLink}>
          <Text style={styles.signupText}>
            Don't have an account? <Text style={styles.signupBold}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  decorLine1: {
    position: 'absolute',
    top: 100,
    right: -50,
    width: 200,
    height: 3,
    backgroundColor: 'rgba(69,162,158,0.2)',
    transform: [{ rotate: '45deg' }],
  },
  decorLine2: {
    position: 'absolute',
    bottom: 150,
    left: -50,
    width: 180,
    height: 3,
    backgroundColor: 'rgba(69,162,158,0.15)',
    transform: [{ rotate: '-45deg' }],
  },
  card: {
    width: width * 0.9,
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 24,
    paddingVertical: 40,
    paddingHorizontal: 28,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 15,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: PRIMARY,
    marginTop: 8,
    letterSpacing: 0.5,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: SECONDARY,
    marginBottom: 8,
  },
  subheading: {
    color: '#5a7875',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f7f7',
    borderRadius: 12,
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 4,
    width: '100%',
    borderWidth: 1,
    borderColor: '#d4e4e5',
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: SECONDARY,
    paddingVertical: 12,
  },
  linkRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  rememberText: {
    color: '#5a7875',
    fontSize: 13,
  },
  forgotText: {
    color: ACCENT,
    fontSize: 13,
    fontWeight: '600',
  },
  buttonWrapper: {
    width: '100%',
    marginBottom: 20,
  },
  loginButton: {
    paddingVertical: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: PRIMARY,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
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
    color: '#8ba5a6',
    marginHorizontal: 16,
    fontSize: 13,
    fontWeight: '600',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f7f7',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: '#d4e4e5',
  },
  signupLink: {
    marginTop: 8,
  },
  signupText: {
    color: '#5a7875',
    fontSize: 14,
  },
  signupBold: {
    color: PRIMARY,
    fontWeight: '700',
  },
});