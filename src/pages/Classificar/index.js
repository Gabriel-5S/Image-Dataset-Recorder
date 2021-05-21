import "react-native-gesture-handler";
import React from "react";
import styles from "./styles";
import { View, Image, Text, TouchableOpacity } from "react-native";

export default function Classificar({ route, navigation }) {
  const { image } = route.params;

  return (
    <View style={styles.container1}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
    </View>
  );
}
