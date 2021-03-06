import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {LayoutDefault} from '../../layouts/layoutdefault';
import {globalStyles} from '../../../src/assets/global-style';

const Home = ({navigation}) => {
  return (
    <>
      <View>
        <Text style={globalStyles.sectionTitle}>Home Page</Text>
        <Button
          title="Ürün Listesine Git"
          color="#841584"
          onPress={() => navigation.navigate('Ürün Listesi')}
        />
      </View>
    </>
  );
};

export default Home;
