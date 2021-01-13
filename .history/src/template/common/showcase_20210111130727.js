import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
const styles = StyleSheet.create({
  showcase: {
    overflow: 'hidden',
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  showcaseImage: {},
  img: {
    width: 100,
    height: 100,
  },
  showcaseDetail: {
    padding: 10,
    overflow: 'hidden',
  },
  productTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    width: 200,
  },
  productTitle: {},
});
const Showcase = ({product}) => {
  return (
    <>
      <View style={styles.showcase}>
        <View style={styles.showcaseImage}>
          <Image style={styles.img} source={{uri: product.image}} />
        </View>
        <View style={styles.showcaseDetail}>
          <View style={styles.productTitleContainer}>
            <Text numberOfLines={2} style={styles.productTitle}>
              {product.title}
            </Text>
          </View>
          <Text>{product.price}</Text>
        </View>
      </View>
    </>
  );
};

export default Showcase;
