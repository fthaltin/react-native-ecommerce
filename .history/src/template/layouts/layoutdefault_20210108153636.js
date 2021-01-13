import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';

import {globalStyles} from '../../../src/assets/global-style';

const LayoutDefault = (props) => {
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
            <View style={globalStyles.sectionContainer}>{props.children}</View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default LayoutDefault;
