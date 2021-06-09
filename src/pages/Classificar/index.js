import 'react-native-gesture-handler';
import React, {useState} from 'react';
import styles from './styles';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import categories from './categories';
import RadioGroup from 'react-native-radio-buttons-group';

export default function Classificar({route, navigation}) {
  const {image} = route.params;

  // const renderButton = ({ item }) => {
  //   return (
  //     <View style={{ padding: 5 }}>
  //       <TouchableOpacity
  //         style={[styles.button, {backgroundColor: item.color}]}
  //         onPress={console.warn(item.category)}>
  //         <Text style={styles.buttonText}>{item.category}</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };

  const radioButtonsData = categories.map(function (item) {
    return { id: item.id, color: item.color, label: item.category, value: item.category };
  });

  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Classificar a imagem:</Text>

      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>

      <View style={styles.buttonsContainer}>
        <RadioGroup
          radioButtons={radioButtons}
          onPress={onPressRadioButton}
        />

        {/*<FlatList*/}
        {/*  data={categories}*/}
        {/*  keyExtractor={i => categories.id}*/}
        {/*  renderItem={renderButton}*/}
        {/*/>*/}
      </View>

      <View style={{marginBottom: 30}}>
        <TouchableOpacity
          style={styles.buttonSave}
          onPress={console.log('Salvo!')}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
