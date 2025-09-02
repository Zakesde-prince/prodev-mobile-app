import { Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "@/styles/_mainstyle";
import { HEROLOGO, BACKGROUNDIMAGE } from "@/constants";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={HEROLOGO} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Welcome to ProDev</Text>
          <Text style={styles.titleSubText}>Start your journey now</Text>
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.buttonPrimary}>
            <Text style={styles.buttonPrimaryText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSecondary}>
            <Text style={styles.buttonSecondaryText}>Join Now</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
