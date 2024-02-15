import React, { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useAuth } from "../Context/AuthContext";
import TabNavigation from "../Navigations/TabNavigation";
import Colors from "../Shared/Colors";
import { useFonts } from "expo-font";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const AuthScreen = ({ route }) => {
  const navigation = useNavigation();
  const [localUsername, setLocalUsername] = useState("");
  const [localEmail, setLocalEmail] = useState("");
  const { setUsername, setEmail, username } = useAuth();
  const [fontsLoaded] = useFonts({
    raleway: require("../../assets/Fonts/Raleway-Regular.ttf"),
    "raleway-bold": require("../../assets/Fonts/Raleway-SemiBold.ttf"),
  });

  const onSignIn = () => {
    setUsername(localUsername);
    setEmail(localEmail);
  };

  if (username) {
    return <TabNavigation />;
  }

  return (
    <View style={styles.page}>
      <Image
        source={require("../../assets/BurnLah.png")} // Replace with your logo
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Please sign in to continue</Text>
      <InputWithIcon
        iconName="person-circle-outline"
        placeholder="Name"
        value={localUsername}
        onChangeText={setLocalUsername}
      />
      <InputWithIcon
        iconName="mail-outline"
        placeholder="Email"
        value={localEmail}
        onChangeText={setLocalEmail}
      />
      <TouchableOpacity onPress={onSignIn} style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

const InputWithIcon = ({ iconName, placeholder, value, onChangeText }) => {
  return (
    <View style={styles.inputContainer}>
      <Ionicons
        name={iconName}
        size={24}
        color={Colors.DARK_GRAY}
        style={styles.icon}
      />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholderTextColor={Colors.DARK_GRAY}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.MAIN,
  },
  logo: {
    width: 300,
    height: 200,
  },
  title: {
    fontFamily: "raleway-bold",
    fontSize: 24,
    color: Colors.WHITE,
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: "raleway-bold",
    fontSize: 16,
    color: Colors.GRAY,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    fontFamily: "raleway",
    borderWidth: 1,
    borderColor: Colors.GRAY,
    backgroundColor: Colors.GRAY,
    padding: 10,
    borderRadius: 5,
    width: "90%",
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: 18,
    fontFamily: "raleway-bold",
  },
  icon: {
    marginRight: 10,
  },
});

export default AuthScreen;
