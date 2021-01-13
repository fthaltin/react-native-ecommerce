import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {globalStyles} from '../../../assets/global-style';
import LayoutDefault from '../../layouts/layoutdefault';

const Home = ({navigation}) => {
  return (
    <LayoutDefault>
      <Text style={globalStyles.sectionTitle}>Home Page</Text>
      <Button
        title="Ürün Listesine Git"
        color="#841584"
        onPress={() => navigation.navigate('ProductList')}
      />
    </LayoutDefault>

    // <Text style={globalStyles.sectionTitle}>Home Page</Text>
  );
};

export default Home;
