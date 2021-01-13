import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {globalStyles} from '../../../assets/global-style';

import {LayoutDefault} from '../../layouts/layoutdefault';

const ProductList = ({navigation}) => {
  return (
    <>
      <View>
        <Text style={globalStyles.sectionTitle}>Ürün Listeleme</Text>
        <Button
          title="Anasayfaya Dön"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </>
  );
};

export default ProductList;
