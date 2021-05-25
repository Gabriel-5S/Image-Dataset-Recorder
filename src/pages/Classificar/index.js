import "react-native-gesture-handler";
import React from "react";
import styles from "./styles";
import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import categories from "./categories";

export default function Classificar({ route, navigation }) {
  const { image } = route.params;

  const renderButton = ({ item }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={console.warn(item.category)}>
        <Text style={styles.buttonText}>{item.category}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container1}>
      <Text style={styles.header}>Classificar a imagem:</Text>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.buttonsContainer}>
        <FlatList
          data={categories}
          keyExtractor={i => categories.id}
          renderItem={renderButton}
        />
      </View>

      <TouchableOpacity style={styles.button2} onPress={console.warn('Salvo!')}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
