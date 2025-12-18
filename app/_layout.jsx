import { Stack } from "expo-router";
import { useState } from "react";
import { UserProvider } from "../context/UserContext";


export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserProvider>
     <Stack screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? (
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      )}
     </Stack>
    </UserProvider>
  );
}
