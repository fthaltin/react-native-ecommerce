import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {globalStyles} from '../../../assets/global-style';
import LayoutDefault from '../../layouts/layoutdefault';
import {ProductService} from '../../services/products/product-service';
import ProductList from '../../common/product-list';

const Home = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const getData = () => {
    const service = new ProductService();
    service.getAllProducts(5).then((res) => {
      console.log(res);
      setProducts(res);
    });
  };
  return (
    <LayoutDefault>
      {/* <Text style={globalStyles.sectionTitle}>Home Page</Text>
      <Button
        title="Ürün Listesine Git"
        color="#841584"
        onPress={() => navigation.navigate('ProductList')}
      />
      <Button title="Dataları Getir" color="#841584" onPress={getData} /> */}
      <ProductList products={products} />
    </LayoutDefault>
  );
};

export default Home;
