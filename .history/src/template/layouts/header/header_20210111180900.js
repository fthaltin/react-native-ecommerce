import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    overflow: 'hidden',
    flexDirection: 'row',
    flex: 1,
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
  showcaseImage: {
    width: 100,
  },
  img: {
    width: 100,
    height: 100,
  },
  showcaseDetail: {
    flex: 1,
    padding: 10,
    overflow: 'hidden',
  },
  productTitleContainer: {},
  productTitle: {},
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const Header = (props) => {
  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.headerContainer} />
      </View>
    </>
  );
};

export default Header;
