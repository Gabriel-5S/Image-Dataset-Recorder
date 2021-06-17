import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Alert,
} from 'react-native';
import categories from './categories';
import storage from '@react-native-firebase/storage';
import RadioGroup from 'react-native-radio-buttons-group';
import ImageEditor from '@react-native-community/image-editor';
import {ActivityIndicator} from 'react-native';

export default function Classificar({route, navigation}) {
  const {image} = route.params;
  const [cropURI, setCropURI] = useState();

  //Dados para o corte da imagem
  const cropData = {
    //TODO - Os valores de x e y devem ser reajustados com testes na caixa
    offset: {x: 0, y: 0},
    size: {width: 450, height: 450},
  };
  //Corta a imagem e retorna a uri da imagem cortada em cache
  const cropImage = async () => {
    await ImageEditor.cropImage(image.uri, cropData)
      .then(cropUri => {
        setCropURI(cropUri);
      })
      .catch(cropError => {
        console.log(cropError);
      });
  };

  useEffect(() => {
    cropImage();
    uploading;
  }, []);

  //Dados para a radioList
  const radioButtonsData = categories.map(function (item) {
    return {
      id: item.id,
      color: item.color,
      label: item.category,
      value: item.category,
    };
  });

  //Controlam o estado do item selecionado na radioList
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const [selectedValue, setSelectedValue] = useState();

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
    radioButtons.forEach(function (item) {
      if (item.selected) {
        //Atribui o valor para identificação da rota no momento do upload no storage
        setSelectedValue(item.value);
      }
    });
  }

  //Controlam o estado de variáveis do upload para renderização do progesso usando ActivityIndicator
  const [uploading, setUploading] = useState(true);
  const [uploadTaskSnapshot, setUploadTaskSnapshot] = useState({});

  //Faz o upload do arquivo
  const uploadImage = async () => {
    if (selectedValue) {
      setUploading(false);
      const reference = storage().ref(selectedValue + '/' + image.fileName);
      const task = reference.putFile(cropURI);

      task.on('state_changed', taskSnapshot => {
        setUploadTaskSnapshot(taskSnapshot);
        console.log(
          `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
        );
      });
      task.then(() => {
        Alert.alert('Sucesso!', 'Upload feito com sucesso!', [
          {text: 'OK', onPress: () => {}},
        ]);
        navigation.navigate('Home');
      });
    } else {
      Alert.alert('', 'Selecione uma das classes!', [
        {text: 'OK', onPress: () => {}},
      ]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Classificar a imagem:</Text>

      <View style={styles.imageContainer}>
        <Image source={{uri: cropURI}} style={styles.image} />
      </View>

      <View style={styles.buttonsContainer}>
        <RadioGroup radioButtons={radioButtons} onPress={onPressRadioButton} />
      </View>

      <View
        style={{
          marginBottom: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/*Verifica se está fazendo o upload e renderiza ou o botão ou o ActivityIndicator*/}
        {uploading ? (
          <TouchableOpacity style={styles.buttonSave} onPress={uploadImage}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        ) : (
          <>
            <ActivityIndicator size={35} color="#2F4D90" />
            <Text style={styles.statusText}>Uploading</Text>
            <Text style={styles.statusText}>
              {`${(
                (uploadTaskSnapshot.bytesTransferred /
                  uploadTaskSnapshot.totalBytes) *
                100
              ).toFixed(2)}% / 100%`}
            </Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}
