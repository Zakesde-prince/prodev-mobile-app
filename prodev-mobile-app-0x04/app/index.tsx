import { useRouter } from "expo-router";
import React from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { BACKGROUNDIMAGE, HEROLOGO } from "../constants";
import { styles as mainStyles } from "../styles/_mainstyle";

export default function Index() {
  const router = useRouter();

  return (
    <ImageBackground source={BACKGROUNDIMAGE} style={mainStyles.backgroundImageContainer} resizeMode="cover">
      <View style={mainStyles.logoContainer}>
        <Image source={HEROLOGO} style={{ width: 120, height: 60, resizeMode: "contain" }} />
      </View>

      <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 20 }}>
        <View style={mainStyles.titleContainer}>
          <Text style={mainStyles.titleText}>Welcome to Pro Dev</Text>
          <View style={mainStyles.titleSubTextContainer}>
            <Text style={mainStyles.titleSubText}>
              Learn to build beautiful front-end apps — start here.
            </Text>
          </View>
        </View>
      </View>

      <View style={{ paddingBottom: 36 }}>
        <View style={mainStyles.buttonGroup}>
          <TouchableOpacity style={mainStyles.buttonPrimary} onPress={() => router.push("/join")}>
            <Text style={mainStyles.buttonPrimaryText}>Get Started</Text>
          </TouchableOpacity>

          <TouchableOpacity style={mainStyles.buttonSecondary} onPress={() => router.push("/signin")}>
            <Text style={mainStyles.buttonSecondaryText}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <View style={mainStyles.buttonGroupSubText}>
          <Text style={{ color: "white" }}>By continuing, you agree to our terms.</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
