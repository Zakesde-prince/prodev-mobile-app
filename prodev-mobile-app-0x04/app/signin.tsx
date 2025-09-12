import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { FACEBOOKLOGO, GOOGLELOGO, HEROLOGO } from "../constants";
import { styles } from "../styles/_joinstyle";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    if (!email || !password) {
      alert("Please fill both fields");
      return;
    }
    alert("Signed in (demo).");
    // here normally you'd call an API and then navigate to the protected/home screen
    router.push("/");
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconsection}>
        <TouchableOpacity onPress={() => router.push("/")}>
          <Text>Back</Text>
        </TouchableOpacity>
        <Image source={HEROLOGO} style={{ width: 80, height: 32, resizeMode: "contain" }} />
      </View>

      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Welcome back</Text>
        <Text style={styles.subText}>Sign in to continue</Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Email</Text>
        <TextInput value={email} onChangeText={setEmail} style={styles.formControl} placeholder="you@mail.com" />

        <Text style={styles.formLabel}>Password</Text>
        <View style={styles.formPasswordControl}>
          <TextInput secureTextEntry value={password} onChangeText={setPassword} style={styles.passwordControl} placeholder="password" />
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.secondaryButtonGroup}>
          <TouchableOpacity style={[styles.secondaryButton, { borderColor: "#e6e6e6" }]}>
            <Image source={GOOGLELOGO} style={{ width: 20, height: 20 }} />
            <Text style={styles.secondaryButtonText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.secondaryButton, { borderColor: "#e6e6e6" }]}>
            <Image source={FACEBOOKLOGO} style={{ width: 20, height: 20 }} />
            <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={() => alert("Reset password flow (not implemented)")} style={{ marginTop: 10 }}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>
    </View>
  );
}
