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
    backgroundColor: '#2C2E3E',
    height: 70,
    color: '#fff',
  },
});

const Header = (props) => {
  return (
    <>
      <View style={styles.headerContainer}>
        <Text> Burası Header</Text>
      </View>
    </>
  );
};

export default Header;
