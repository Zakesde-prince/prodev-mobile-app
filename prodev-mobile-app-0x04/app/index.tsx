import { View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { styles } from "@/styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground source={BACKGROUNDIMAGE} style={styles.backgroundImageContainer}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image source={HEROLOGO} />
        </View>

        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Let’s Get Started</Text>
          <View style={styles.titleSubTextContainer}>
            <Text style={styles.titleSubText}>Sign in or create an account</Text>
          </View>
        </View>

        {/* Buttons */}
        <View style={{ marginTop: 80 }}>
          <View style={styles.buttonGroup}>
            <Link href="/signin" asChild>
              <TouchableOpacity style={styles.buttonPrimary}>
                <Text style={styles.buttonPrimaryText}>Sign In</Text>
              </TouchableOpacity>
            </Link>

            <Link href="/join" asChild>
              <TouchableOpacity style={styles.buttonSecondary}>
                <Text style={styles.buttonSecondaryText}>Join Now</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
