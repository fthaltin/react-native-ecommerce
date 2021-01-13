import React from 'react';
import {View, Text} from 'react-native';
import Showcase from './showcase';
const ProductList = ({products}) => {
  return (
    <>
      {products.map((item) => {
        return (
          <>
            <Showcase />
          </>
        );
      })}
    </>
  );
};

export default ProductList;
