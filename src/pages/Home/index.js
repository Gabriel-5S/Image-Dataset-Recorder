import "react-native-gesture-handler";
import React, { useContext, useState, useEffect } from "react";
import firestore from "@react-native-firebase/firestore";
import styles from "./styles";
import { AuthContext } from "../../navigation/AuthProvider";
import { SafeAreaView, View, Image, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";

import { launchCamera } from "react-native-image-picker";

export default function Home({ navigation }) {
  const { user, logout } = useContext(AuthContext);

  const [name, setName] = useState("");

  const fetchUser = async () => {
    try {
      const subscriber = firestore()
        .collection("users")
        .doc(user.uid)
        .onSnapshot(documentSnapshot => {
          if (!documentSnapshot.exists) {
            console.log("No such document!");
          } else {
            const { name } = documentSnapshot.data();
            setName(name);
          }
        });
      return () => subscriber();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchUser();
  });

  const pickImage = () => {
    launchCamera(
      {
        title: "Escolha a imagem",
        maxHeight: 450,
        maxWidth: 600,
      },
      res => {
        if (!res.didCancel) {
          navigation.navigate("Classificar", {
            image: { uri: res.uri, base64: res.base64 },
          });
        }
      },
    );
  };

  return (
    <SafeAreaView style={styles.container1}>
      <View style={styles.containerText}>
        <Text style={styles.header}>Olá, {name}!</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Icon name="sign-out" size={28} color={"#2F4D90"} />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Icon name="camera" size={25} color={"#FFFFFF"} />
        </TouchableOpacity>
        {/*<TouchableOpacity style={styles.button} onPress={logout}>*/}
        {/*  <Text style={styles.buttonText}>Logout</Text>*/}
        {/*</TouchableOpacity>*/}
      </View>
    </SafeAreaView>
  );
}
