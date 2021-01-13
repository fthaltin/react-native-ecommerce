import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
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
  },
  productTitle: {},
});
const Showcase = ({product}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.showcase}>
        <View style={styles.showcaseImage}>
          <Image style={styles.img} source={{uri: product.image}} />
        </View>
        <View style={styles.showcaseDetail}>
          <View style={styles.productTitleContainer}>
            <Text numberOfLines={2} style={styles.productTitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
              iaculis velit, et volutpat quam. Sed ultrices vehicula risus,
              sodales feugiat enim ultricies sit amet. Proin eu lacus
              sollicitudin lacus condimentum pharetra eu sed arcu. Nam lorem
              diam, pellentesque ut dapibus non, ultricies in nisl. Phasellus
              sodales lobortis risus eget aliquam. Curabitur nunc risus, laoreet
              a neque a, tempus fermentum enim. Praesent id lectus ut lorem
              placerat maximus eu in felis. Vestibulum tincidunt pellentesque
              nisi ac pharetra. Nullam lacinia justo tellus, vel pretium orci
              vestibulum eu. Praesent luctus erat vel euismod laoreet. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Nam sollicitudin velit neque, non hendrerit sapien
              efficitur eget. Nunc fermentum vel odio eu fringilla.
            </Text>
          </View>
          <Text>{product.price}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Showcase;
