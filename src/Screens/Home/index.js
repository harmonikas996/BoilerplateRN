import React from 'react';
import {View} from 'react-native';
import Counter from '../../Components/Counter';
import Layout from '../../Style/Layout';

const HomeScreen = () => {
  return (
    <View style={[Layout.fill, Layout.justifyContentCenter]}>
      <Counter color="red" />
    </View>
  );
};

export default HomeScreen;
