import { View, Text, StyleSheet } from "react-native"

const IconComponent = ({ type, color }) => {
  const icons = {
    heart: (
      <View style={[styles.iconContainer, { backgroundColor: color + "15" }]}>
        <View style={styles.heartIcon}>
          <View style={[styles.heartShape, { borderColor: color }]} />
        </View>
      </View>
    ),
    steps: (
      <View style={[styles.iconContainer, { backgroundColor: color + "15" }]}>
        <View style={styles.stepsIcon}>
          <View style={[styles.footprint, { backgroundColor: color }]} />
        </View>
      </View>
    ),
    sleep: (
      <View style={[styles.iconContainer, { backgroundColor: color + "15" }]}>
        <View style={styles.sleepIcon}>
          <View style={[styles.moon, { borderColor: color }]} />
        </View>
      </View>
    ),
    water: (
      <View style={[styles.iconContainer, { backgroundColor: color + "15" }]}>
        <View style={styles.waterIcon}>
          <View style={[styles.droplet, { backgroundColor: color }]} />
        </View>
      </View>
    ),
  }
  return icons[type]
}

export default function HealthStatsGrid({ stats }) {
  const iconTypes = ['heart', 'steps', 'sleep', 'water']
  
  return (
    <View style={styles.statsSection}>
      <Text style={styles.sectionTitle}>Health Overview</Text>
      <View style={styles.statsGrid}>
        {stats.map((stat, index) => (
          <View key={index} style={[styles.statCard, { borderLeftColor: stat.color }]}>
            <View style={styles.statHeader}>
              <IconComponent type={iconTypes[index]} color={stat.color} />
              <Text style={styles.statTitle}>{stat.title}</Text>
            </View>
            <Text style={styles.statValue}>{stat.value}</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { backgroundColor: stat.color, width: '70%' }]} />
            </View>
            <Text style={styles.statStatus}>{stat.status}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  statsSection: { 
    paddingHorizontal: 20, 
    marginBottom: 25,
    marginTop: -20,
  },
  sectionTitle: { 
    fontSize: 22, 
    fontWeight: "bold", 
    color: "#327576", 
    marginBottom: 18,
    letterSpacing: 0.3,
  },
  statsGrid: { 
    flexDirection: "row", 
    flexWrap: "wrap", 
    gap: 15 
  },
  statCard: {
    backgroundColor: "white", 
    borderRadius: 18, 
    padding: 18,
    width: "47%", 
    borderLeftWidth: 5,
    shadowColor: "#327576", 
    shadowOpacity: 0.08, 
    shadowRadius: 12, 
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  statHeader: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginBottom: 12 
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  heartIcon: {
    width: 16,
    height: 16,
  },
  heartShape: {
    width: 16,
    height: 16,
    borderWidth: 2,
    borderRadius: 8,
    transform: [{ rotate: '45deg' }],
  },
  stepsIcon: {
    width: 16,
    height: 16,
  },
  footprint: {
    width: 8,
    height: 14,
    borderRadius: 4,
  },
  sleepIcon: {
    width: 16,
    height: 16,
  },
  moon: {
    width: 16,
    height: 16,
    borderWidth: 2,
    borderRadius: 8,
  },
  waterIcon: {
    width: 16,
    height: 16,
  },
  droplet: {
    width: 10,
    height: 14,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  statTitle: { 
    fontSize: 12, 
    color: "#64748b", 
    fontWeight: "600",
    flex: 1,
  },
  statValue: { 
    fontSize: 20, 
    fontWeight: "bold", 
    color: "#327576", 
    marginBottom: 8,
    letterSpacing: 0.3,
  },
  progressBar: {
    height: 4,
    backgroundColor: "#e2e8f0",
    borderRadius: 2,
    marginBottom: 8,
    overflow: "hidden",
  },
  progressFill: {
    height: 4,
    borderRadius: 2,
  },
  statStatus: { 
    fontSize: 11, 
    color: "#94a3b8",
    fontWeight: "500",
  },
})