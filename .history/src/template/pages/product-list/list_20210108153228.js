import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {globalStyles} from '../../../assets/global-style';
import LayoutDefault from '../../layouts/layoutdefault';

const ProductList = ({navigation}) => {
  return (
    <LayoutDefault>
      <Text style={globalStyles.sectionTitle}>Ürün Listeleme</Text>
      <Button
        title="Anasayfaya Dön"
        onPress={() => navigation.navigate('Home')}
      />
    </LayoutDefault>

    // <Text style={globalStyles.sectionTitle}>Ürün Listeleme</Text>
  );
};

export default ProductList;
