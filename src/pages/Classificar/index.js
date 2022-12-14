import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import categories from './categories';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import RadioGroup from 'react-native-radio-buttons-group';
import ImageEditor from '@react-native-community/image-editor';
import {ActivityIndicator} from 'react-native';
import ModalInput from './modal';

export default function Classificar({route, navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [additionalInfo, setAdditionalInfo] = useState('');
  const {image, name} = route.params;
  const [cropURI, setCropURI] = useState();

  //Ordenada para corte quadrado centralizado na imagem original
  const cropY = (image.height - image.width) * 0.5;

  //Dados para o corte da imagem de acordo com dimensões do sensor
  function cropDataVerifier() {
    if (image.width < image.height) {
      const cropData = {
        //TODO - Os valores de x e y devem ser reajustados com testes na caixa
        offset: {x: 0, y: cropY},
        size: {width: image.width, height: image.width},
      };
      return cropData;
    } else {
      const cropData = {
        //TODO - Os valores de x e y devem ser reajustados com testes na caixa
        offset: {x: -cropY, y: 0},
        size: {width: image.height, height: image.height},
      };
      return cropData;
    }
  }

  //Corta a imagem e retorna a uri da imagem cortada em cache
  const cropImage = async () => {
    await ImageEditor.cropImage(image.uri, cropDataVerifier())
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
      labelStyle: {fontSize: 18},
      value: item.category,
      size: 35,
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

      const metadata = {
        customMetadata: {
          class: selectedValue,
          autor: name,
        },
      };

      const reference = storage().ref(selectedValue + '/' + image.fileName);
      const task = reference.putFile(cropURI, metadata);

      task.on('state_changed', taskSnapshot => {
        setUploadTaskSnapshot(taskSnapshot);
        console.log(
          `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
        );
      });
      task.then(() => {
        Alert.alert('Success!', 'Uploaded successfully!', [
          {
            text: 'OK',
            onPress: () => {},
          },
        ]);
        uploadData();
        navigation.navigate('Home');
      });
    } else {
      Alert.alert('', 'Select one of the classes!', [
        {
          text: 'OK',
          onPress: () => {},
        },
      ]);
    }
  };

  const uploadData = async () => {
    //Função que incrementará o contador de cada classificação cada vez que for chamado
    const increment = firestore.FieldValue.increment(1);

    //Faz o upload no banco com os dados e a contagem
    const globalCounter = await firestore()
      .collection('global')
      .doc('--globalCounter--');

    //Contador para cada classe
    const counter = await firestore()
      .collection(selectedValue)
      .doc('--counter--');

    //Referência para a coleção de cada classe
    const register = await firestore()
      .collection(selectedValue)
      .doc(image.fileName); //Colocando o nome do documento igual ao da imagem

    const reference = storage().ref(selectedValue + '/' + image.fileName);
    // const storageReference = reference.fullPath;
    const url = await reference.getDownloadURL();

    //Permite múltiplas inserções em seguida, que falharão ou terão sucesso juntas
    const batch = firestore().batch();
    batch.set(register, {
      autor: name,
      class: selectedValue,
      additionalInfo: additionalInfo,
      path: selectedValue + '/' + image.fileName,
      downloadURL: url,
      createdAt: firestore.Timestamp.fromDate(new Date()),
    });
    batch.set(counter, {count: increment}, {merge: true});
    batch.set(
      globalCounter,
      {Global: increment, [selectedValue]: increment},
      {merge: true},
    );
    batch.commit();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Image classification:</Text>

      <View style={styles.imageContainer}>
        <Image source={{uri: cropURI}} style={styles.image} />
      </View>

      <View style={styles.buttonsContainer}>
        <RadioGroup
          style={{fontSize: 50}}
          radioButtons={radioButtons}
          onPress={onPressRadioButton}
        />
      </View>

      <View style={styles.uploadContainer}>
        {/*Verifica se está fazendo o upload e renderiza ou o botão ou o ActivityIndicator*/}
        {uploading ? (
          <>
            <TouchableOpacity
              style={styles.buttonAddInfo}
              onPress={() => {
                setModalVisible(true);
              }}>
              {additionalInfo ? (
                <Text style={styles.buttonText2}>Edit info</Text>
              ) : (
                <Text style={styles.buttonText2}>Add info</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonSave}
              onPress={() => {
                uploadImage();
              }}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </>
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
      <ModalInput
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        additionalInfo={additionalInfo}
        setAdditionalInfo={setAdditionalInfo}
      />
    </SafeAreaView>
  );
}
