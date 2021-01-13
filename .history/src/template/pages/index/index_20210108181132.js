import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {globalStyles} from '../../../assets/global-style';
import LayoutDefault from '../../layouts/layoutdefault';

const Home = ({navigation}) => {
  const getData = () => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => console.log(json));
  };
  return (
    <LayoutDefault>
      <Text style={globalStyles.sectionTitle}>Home Page</Text>
      <Button
        title="Ürün Listesine Git"
        color="#841584"
        onPress={() => navigation.navigate('ProductList')}
      />
      <Button title="Dataları Getir" color="#841584" onPress={getData} />
    </LayoutDefault>
  );
};

export default Home;
