import React from 'react';
import {View, Text} from 'react-native';
import Showcase from './showcase';
const ProductList = ({products}) => {
  return (
    <>
      {products.map((product, index) => {
        return (
          <>
            <Showcase product={product} key={index} />
          </>
        );
      })}
    </>
  );
};

export default ProductList;
