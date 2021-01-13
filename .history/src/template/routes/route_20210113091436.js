import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/index/index';
import ProductListPage from '../screens/product-list/product-list-page';

const MainRoute = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductList" component={ProductListPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoute;
