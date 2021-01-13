import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {globalStyles} from '../../../assets/global-style';
import LayoutDefault from '../../layouts/layoutdefault';
import Boxes from '../../common/boxes';

const ProductList = ({navigation}) => {
  return (
    <LayoutDefault>
      <Text style={globalStyles.sectionTitle}>Ürün Listeleme</Text>
      <Button
        title="Anasayfaya Dön"
        onPress={() => navigation.navigate('Home')}
      />
      <View style={{flex: 1, flexDirection: 'row', marginTop: 20}}>
        <Boxes />
      </View>
      <View style={{flex: 1, flexDirection: 'row-reverse', marginTop: 20}}>
        <Boxes />
      </View>
    </LayoutDefault>

    // <Text style={globalStyles.sectionTitle}>Ürün Listeleme</Text>
  );
};

export default ProductList;
