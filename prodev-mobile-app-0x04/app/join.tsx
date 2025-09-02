import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function Join() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Top Nav */}
        <View style={styles.navGroup}>
          <Ionicons name="arrow-back" size={25} />
          <Image source={require('@/assets/images/logo.png')} />
        </View>

        {/* Title */}
        <Text style={styles.largeText}>Join Now</Text>
        <Text style={styles.smallText}>
          Create your account to get started.
        </Text>

        {/* Form */}
        <View style={styles.formGroup}>
          {/* Name */}
          <View>
            <Text style={styles.placeholderText}>Name</Text>
            <TextInput placeholder="Enter your name" style={styles.inputField} />
          </View>

          {/* Email */}
          <View style={{ marginTop: 20 }}>
            <Text style={styles.placeholderText}>Email</Text>
            <TextInput
              keyboardType="email-address"
              placeholder="Enter your email"
              style={styles.inputField}
            />
          </View>

          {/* Password */}
          <View style={{ marginTop: 20 }}>
            <Text style={styles.placeholderText}>Password</Text>
            <View style={styles.passwordGroup}>
              <TextInput
                placeholder="Enter your password"
                secureTextEntry
                style={{ flex: 1 }}
              />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>
        </View>

        {/* Primary Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Join Now</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerGroup}>
          <View style={styles.divider}></View>
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider}></View>
        </View>

        {/* Social Buttons */}
        <View style={styles.socialMediaButtonGroup}>
          <TouchableOpacity style={styles.socialMediaButton}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
              <Image source={require("@/assets/images/google.png")} />
              <Text style={styles.socialMediaButtonText}>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialMediaButton}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
              <Image source={require("@/assets/images/facebook.png")} />
              <Text style={styles.socialMediaButtonText}>
                Continue with Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.subTextGroup}>
          <Text style={styles.subText}>Already have an account?</Text>
          <Text style={styles.subTextJoin}>Sign in</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
