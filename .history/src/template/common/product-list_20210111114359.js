import React from 'react';
import {View, Text} from 'react-native';
import Showcase from './showcase';
const ProductList = ({products}) => {
  return (
    <>
      {products.map((product) => {
        return (
          <>
            <Showcase product={product} />
          </>
        );
      })}
    </>
  );
};

export default ProductList;
