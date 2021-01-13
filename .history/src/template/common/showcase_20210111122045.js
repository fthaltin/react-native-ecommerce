import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
const styles = StyleSheet.create({
  showcase: {
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
  img: {},
});
const Showcase = ({product}) => {
  return (
    <>
      <View style={styles.showcase}>
        <View style={styles.showcaseImage}>
          <Image style={styles.img} source={product.image} />
        </View>
      </View>
    </>
  );
};

export default Showcase;
