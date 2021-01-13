import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/index/index';
import ProductListScreen from '../screens/product-list/product-list';

const MainRoute = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Anasayfa" component={Home} />
        <Stack.Screen name="Ürün Listesi" component={ProductListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoute;
