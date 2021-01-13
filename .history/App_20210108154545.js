/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
} from 'react-native';

import MainRoute from './src/template/routes/route';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={globalStyles.scrollView}>
          {/* <Header /> */}
          {global.HermesInternal == null ? null : (
            <View style={globalStyles.engine}>
              <Text style={globalStyles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={globalStyles.body}>
            <View style={globalStyles.sectionContainer}>
              {' '}
              <MainRoute />{' '}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
