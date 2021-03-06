import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
} from 'react-native';

import {globalStyles} from '../../../src/assets/global-style';
import Header from './header/header';

const LayoutDefault = (props) => {
  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      <SafeAreaView style={{backgroundColor: '#fff'}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={globalStyles.scrollView}>
          {/* <Header /> */}
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={globalStyles.engine}>
              <Text style={globalStyles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={globalStyles.body}>
            <View style={globalStyles.sectionContainer}>{props.children}</View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default LayoutDefault;
