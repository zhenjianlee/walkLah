import React from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import Colors from "../Shared/Colors";
import { useFonts } from "expo-font";
import { useAuth } from "../Context/AuthContext";

const ProfileScreen = () => {
  const [fontsLoaded] = useFonts({
    raleway: require("../../assets/Fonts/Raleway-Regular.ttf"),
    "raleway-bold": require("../../assets/Fonts/Raleway-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://www.bootdey.com/image/900x400/BFDBEA/000000" }}
        style={styles.coverImage}
      />
      <View style={styles.avatarContainer}>
        <Image
          source={require("../../assets/user.jpg")}
          style={styles.avatar}
        />
        <Text style={[styles.name, styles.textWithShadow]}>Siti</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoValue}>Siti@gmail.com</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Location:</Text>
          <Text style={styles.infoValue}>Singapore, SG</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Bio:</Text>
          <Text style={styles.infoValue}>
            Hello, I am a fitness enthusiast and I love to workout.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    padding: 20,
  },
  coverImage: {
    height: 200,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 20,
    fontFamily: "raleway-bold",
    marginTop: 10,
    color: Colors.BLACK,
  },
  content: {
    marginTop: 20,
    fontFamily: "raleway",
  },
  infoContainer: {
    marginTop: 20,
  },
  infoLabel: {
    fontFamily: "raleway-bold",
  },
  infoValue: {
    marginTop: 5,
  },
});

export default ProfileScreen;
