import firestore from '@react-native-firebase/firestore';
import {FlatList, StyleSheet, Text, View, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import React, {useState, useEffect} from 'react';
import {PieChart} from 'react-native-svg-charts';

export default _ => {
  const [classACount, setClassACount] = useState(0);
  const [classBCount, setClassBCount] = useState(0);
  const [classCCount, setClassCCount] = useState(0);
  const [globalCount, setGlobalCount] = useState(0);

  const counter = async () => {
    try {
      const positiveCounter = firestore()
        .collection('global')
        .doc('--globalCounter--')
        .onSnapshot(documentSnapshot => {
          try {
            if (!documentSnapshot.exists) {
              console.log('No such document!');
            } else {
              setGlobalCount(documentSnapshot.data().Global);
              setClassACount(documentSnapshot.data()['Class A']);
              setClassBCount(documentSnapshot.data()['Class B']);
              setClassCCount(documentSnapshot.data()['Class C']);
            }
          } catch (e) {
            console.log(e);
          }
        });
      return () => positiveCounter();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    counter();
  });

  //Array com ícones, cores e contadores
  const registers = [
    {
      id: 1,
      icon: 'circle',
      color: '#0f9a00',
      name: 'Class A',
      count: classACount,
    },
    {
      id: 2,
      icon: 'circle',
      color: '#a01414',
      name: 'Class B',
      count: classBCount,
    },
    {
      id: 3,
      icon: 'circle',
      color: '#cb9c00',
      name: 'Class C',
      count: classCCount,
    },
  ];

  const renderIcons = ({item}) => (
    <View style={style.iconsContainer}>
      <Icon name={item.icon} size={30} color={item.color} />
    </View>
  );

  const renderValues = ({item}) => (
    <View style={style.valuesContainer}>
      <Text style={style.text}>
        {item.name}: {item.count}
      </Text>
    </View>
  );

  const data = [
    {key: 1, amount: classACount, svg: {fill: '#0f9a00'}},
    {key: 2, amount: classBCount, svg: {fill: '#B22222'}},
    {key: 3, amount: classCCount, svg: {fill: '#d7a713'}},
  ];

  return (
    <View style={style.container}>
      <View style={style.textContainer}>
        <Icon
          name={'globe'}
          size={29}
          color={'#2F4D90'}
          style={{marginRight: 10}}
        />
        <Text style={style.centralText}>Total: {globalCount}</Text>
      </View>
      <View style={{flex: 1, marginBottom: 10}}>
        <View style={{flex: 1, marginBottom: 55}}>
          <PieChart
            style={{height: 200}}
            valueAccessor={({item}) => item.amount}
            data={data}
            spacing={0}
            outerRadius={'95%'}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}>
          <View style={{justifyContent: 'flex-start'}}>
            <FlatList
              data={registers}
              renderItem={renderIcons}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={{justifyContent: 'flex-start'}}>
            <FlatList
              data={registers}
              renderItem={renderValues}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  classContainer: {
    padding: 5,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconsContainer: {
    marginBottom: 5.2,
    marginTop: 5.2,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  valuesContainer: {
    marginBottom: 7.3,
    marginTop: 7.3,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  flatListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  pieChartContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 400,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    marginTop: 15,
  },
  centralText: {
    fontSize: 24,
  },
  text: {
    marginLeft: 15,
    fontSize: 19,
  },
});
