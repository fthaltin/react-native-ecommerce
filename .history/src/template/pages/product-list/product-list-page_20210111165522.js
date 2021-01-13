import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {globalStyles} from '../../../assets/global-style';
import LayoutDefault from '../../layouts/layoutdefault';
import Boxes from '../../common/boxes';
import ProductList from '../../common/product-list';

const ProductListPage = ({navigation}) => {
  const getData = (limit) => {
    const service = new ProductService();
    service.getAllProducts(limit ? limit : null).then((res) => {
      console.log(res);
      setProducts(res);
    });
  };
  useEffect(() => {
    getData();
  });
  return (
    <LayoutDefault>
      {/* <Text style={globalStyles.sectionTitle}>Ürün Listeleme</Text> */}
      <Button
        title="Anasayfaya Dön"
        onPress={() => navigation.navigate('Home')}
      />
      {/* <View style={{flex: 1, flexDirection: 'row', marginTop: 20}}>
        <Boxes />
      </View>
      <View style={{flex: 1, flexDirection: 'row-reverse', marginTop: 20}}>
        <Boxes />
      </View>
      <View style={{flex: 1, marginTop: 20}}>
        <Boxes />
      </View> */}
      <ProductList products={} />
    </LayoutDefault>

    // <Text style={globalStyles.sectionTitle}>Ürün Listeleme</Text>
  );
};

export default ProductListPage;
