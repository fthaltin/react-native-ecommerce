import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {globalStyles} from '../../../assets/global-style';
import LayoutDefault from '../../layouts/layoutdefault';

const Home = ({navigation}) => {
  const getData = () => {
    fetch(
      'https://asos2.p.rapidapi.com/categories/list?country=US&lang=en-US',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key':
            'b8133aad97msh064927edf9266f4p1c41e1jsnca8985faf2c4',
          'x-rapidapi-host': 'asos2.p.rapidapi.com',
        },
      },
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <LayoutDefault>
      <Text style={globalStyles.sectionTitle}>Home Page</Text>
      <Button
        title="Ürün Listesine Git"
        color="#841584"
        onPress={() => navigation.navigate('ProductList')}
      />
      <Button title="Dataları Getir" color="#841584" onPress={() => getData} />
    </LayoutDefault>

    // <Text style={globalStyles.sectionTitle}>Home Page</Text>
  );
};

export default Home;
