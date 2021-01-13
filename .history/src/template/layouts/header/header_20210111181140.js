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
