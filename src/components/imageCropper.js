import React, {Component} from 'react';
import {View, Image} from 'react-native';
import ImageEditor from '@react-native-community/image-editor';
import styles from './styles';

export default class imageCropper extends Component {
  state = {
    imageURI: this.props.imageURI,
    croppedImageURI: this.props.imageURI,
  };

  _cropData = {
    //TODO - Os valores de x e y devem ser reajustados com testes na caixa
    offset: {x: 0, y: 0},
    size: {width: 250, height: 250},
  };

  cropImage(imageURI) {
    ImageEditor.cropImage(imageURI, this._cropData)
      .then(uri => this.setState({croppedImageURI: uri}))
      .catch(cropError => {
        console.log(cropError);
      });
  }

  componentDidMount() {
    this.cropImage(this.state.imageURI);
  }

  render() {
    return (
      <View style={styles.imageContainer}>
        <Image
          source={{uri: this.state.croppedImageURI}}
          style={styles.image}
        />
      </View>
    );
  }
}
