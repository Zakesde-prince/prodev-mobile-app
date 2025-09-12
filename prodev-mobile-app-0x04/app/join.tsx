import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { FACEBOOKLOGO, GOOGLELOGO, HEROLOGOGREEN } from "../constants";
import { styles } from "../styles/_joinstyle";

export default function Join() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleCreate() {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }
    // for now just navigate to signin (or home) after "creating"
    alert("Account created (demo). Now sign in.");
    router.push("/signin");
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconsection}>
        <View />
        <Image source={HEROLOGOGREEN} style={{ width: 80, height: 30, resizeMode: "contain" }} />
      </View>

      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Create your account</Text>
        <Text style={styles.subText}>Join us and start building.</Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Full name</Text>
        <TextInput value={name} onChangeText={setName} style={styles.formControl} placeholder="John Doe" />

        <Text style={styles.formLabel}>Email</Text>
        <TextInput keyboardType="email-address" value={email} onChangeText={setEmail} style={styles.formControl} placeholder="you@mail.com" />

        <Text style={styles.formLabel}>Password</Text>
        <View style={styles.formPasswordControl}>
          <TextInput secureTextEntry value={password} onChangeText={setPassword} style={styles.passwordControl} placeholder="password" />
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={handleCreate}>
          <Text style={styles.buttonText}>Create Account</Text>
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

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/signin")}>
          <Text style={styles.signupSubTitleText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
