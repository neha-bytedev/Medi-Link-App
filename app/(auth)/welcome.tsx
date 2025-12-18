import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen() {
  const router = useRouter();
  const [theme, setTheme] = useState('light');
  const [pressed, setPressed] = useState("");

  const PRIMARY = '#327576';
  const SECONDARY = '#1a3a3b';
  const ACCENT = '#45a29e';
  const LIGHT_BG = '#f0f4f5';
  const DARK_BG = '#0a1415';
  
  const lightGradient = [LIGHT_BG, '#e0ebec', '#d4e4e6'];
  const darkGradient = [DARK_BG, '#151f20', SECONDARY];
  
  const textColor = theme === 'light' ? SECONDARY : '#e8f0f0';
  const iconName = theme === 'light' ? 'moon' : 'sunny';
  const iconColor = theme === 'light' ? PRIMARY : ACCENT;
  const cardBg = theme === 'light' ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.6)';

  return (
    <LinearGradient
      colors={theme === 'light' ? lightGradient : darkGradient}
      style={styles.container}
    >
      {/* Geometric decorations */}
      <View style={[styles.decorShape, styles.shape1, { 
        backgroundColor: theme === 'light' ? 'rgba(50,117,118,0.1)' : 'rgba(69,162,158,0.15)' 
      }]} />
      <View style={[styles.decorShape, styles.shape2, { 
        backgroundColor: theme === 'light' ? 'rgba(50,117,118,0.08)' : 'rgba(69,162,158,0.12)' 
      }]} />

      {/* Theme Toggle */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={[styles.themeToggle, { 
            backgroundColor: theme === 'light' ? 'rgba(50,117,118,0.15)' : 'rgba(69,162,158,0.2)',
            borderColor: theme === 'light' ? 'rgba(50,117,118,0.25)' : 'rgba(69,162,158,0.3)'
          }]}
          onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          <Ionicons name={iconName} size={22} color={iconColor} />
        </TouchableOpacity>
      </View>

      <View style={[styles.card, { backgroundColor: cardBg }]}>
        {/* Medical Icon */}
        <View style={[styles.iconContainer, {
          backgroundColor: theme === 'light' ? `${PRIMARY}15` : `${ACCENT}20`
        }]}>
          <Ionicons name="medical" size={64} color={theme === 'light' ? PRIMARY : ACCENT} />
        </View>
        
        <Text style={[styles.title, { color: textColor }]}>
          Welcome to Medi-Link
        </Text>
        
        <Text style={[styles.subtitle, { 
          color: theme === 'light' ? '#5a7875' : '#a0c4c2' 
        }]}>
          Your health journey starts here. Connect with care, manage records, and stay informed.
        </Text>

        {/* Create Account Button */}
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.buttonWrapper}
          onPress={() => router.push('/signup')}
          onPressIn={() => setPressed('create')}
          onPressOut={() => setPressed('')}
        >
          <LinearGradient
            colors={[PRIMARY, ACCENT]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.primaryButton, {
              transform: [{ scale: pressed === 'create' ? 0.97 : 1 }]
            }]}
          >
            <Text style={styles.primaryButtonText}>Create Account</Text>
            <Ionicons name="arrow-forward" size={20} color="#fff" />
          </LinearGradient>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.buttonWrapper}
          onPress={() => router.push('/login')}
          onPressIn={() => setPressed('login')}
          onPressOut={() => setPressed('')}
        >
          <View style={[styles.secondaryButton, {
            borderColor: theme === 'light' ? PRIMARY : ACCENT,
            backgroundColor: theme === 'light' ? '#fff' : 'rgba(69,162,158,0.1)',
            transform: [{ scale: pressed === 'login' ? 0.97 : 1 }]
          }]}>
            <Text style={[styles.secondaryButtonText, { 
              color: theme === 'light' ? PRIMARY : ACCENT 
            }]}>Log In</Text>
            <Ionicons 
              name="log-in-outline" 
              size={20} 
              color={theme === 'light' ? PRIMARY : ACCENT}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.guestLink}>
          <Ionicons 
            name="enter-outline" 
            size={16} 
            color={theme === 'light' ? ACCENT : '#6fc2bf'}
            style={{ marginRight: 6 }}
          />
          <Text style={[styles.guestText, { 
            color: theme === 'light' ? ACCENT : '#6fc2bf' 
          }]}>
            Continue as Guest
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
    paddingTop: 60,
  },
  decorShape: {
    position: 'absolute',
    borderRadius: 30,
  },
  shape1: {
    width: 280,
    height: 280,
    top: -120,
    right: -100,
    transform: [{ rotate: '45deg' }],
  },
  shape2: {
    width: 200,
    height: 200,
    bottom: -80,
    left: -70,
    transform: [{ rotate: '30deg' }],
  },
  topBar: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 30,
    zIndex: 10,
  },
  themeToggle: {
    padding: 12,
    borderRadius: 14,
    borderWidth: 1,
  },
  card: {
    flex: 1,
    width: width * 0.88,
    paddingVertical: 50,
    paddingHorizontal: 28,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 10,
    zIndex: 1,
  },
  iconContainer: {
    width: 130,
    height: 130,
    borderRadius: 65,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 14,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 23,
    paddingHorizontal: 10,
  },
  buttonWrapper: {
    width: '100%',
    marginBottom: 14,
  },
  primaryButton: {
    width: '100%',
    paddingVertical: 17,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    flexDirection: 'row',
    shadowColor: '#327576',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  secondaryButton: {
    width: '100%',
    paddingVertical: 17,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    flexDirection: 'row',
    borderWidth: 2,
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    marginRight: 8,
    letterSpacing: 0.3,
  },
  secondaryButtonText: {
    fontWeight: '700',
    fontSize: 16,
    marginRight: 8,
    letterSpacing: 0.3,
  },
  guestLink: {
    marginTop: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  guestText: {
    fontSize: 15,
    fontWeight: '600',
  },
});