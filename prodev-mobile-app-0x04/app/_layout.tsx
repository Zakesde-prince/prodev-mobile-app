import { Stack } from "expo-router";
import "../global.css"; // <- loads NativeWind CSS (important if you set up NativeWind)

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="/" />
      <Stack.Screen name="join" />
      <Stack.Screen name="signin" />
    </Stack>
  );
}
