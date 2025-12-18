import { View, ScrollView, StyleSheet } from "react-native";
import Header from "../../components/Dashboard/Header";
import QuickActions from "../../components/Dashboard/QuickAction";
import ReportsList from "../../components/Dashboard/ReportsList";
import RemindersList from "../../components/Dashboard/RemindersList";
import HealthStats from "../../components/Dashboard/HealthStats";
import SuggestedUsers from "../../components/Dashboard/SuggestedUsers";

import ConnectionsScreen from "../../components/Connections";
import ReportsScreen from "../../components/Reports";
import Reminders from "../../components/Reminder";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function Dashboard() {
  return (
    <View style={styles.container}>
      <Header name="Neha" emoji="👩‍⚕️" />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <QuickActions />
        <ReportsList />
        <RemindersList />
        <HealthStats />
        <SuggestedUsers />
      </ScrollView>
    </View>
  );
}

export default function DashboardStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Reports" component={ReportsScreen} />
      <Stack.Screen name="Connections" component={ConnectionsScreen} />
      <Stack.Screen name="Reminders" component={Reminders} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8FAFD" },
  scrollContent: { padding: 20, paddingBottom: 100 },
});
