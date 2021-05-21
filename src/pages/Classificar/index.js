import "react-native-gesture-handler";
import React from "react";
import styles from "./styles";
import { View, Image, Text, TouchableOpacity } from "react-native";

export default function Classificar({ route, navigation }) {
  const { image } = route.params;

  return (
    <View style={styles.container1}>
      <Text style={styles.header}>Classificar a imagem:</Text>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={console.warn("Positivo")}>
          <Text style={styles.buttonText}>Positivo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={console.warn("Negativo")}>
          <Text style={styles.buttonText}>Negativo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={console.warn("Label 3")}>
          <Text style={styles.buttonText}>Label 3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={console.warn("Label 4")}>
          <Text style={styles.buttonText}>Label 4</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button2} onPress={console.warn("Salvo!")}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
