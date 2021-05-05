import React from 'react';
import {View} from 'react-native';
import Counter from '../../Components/Counter';
import FocusAwareStatusBar from '../../Components/Shared/FocusAwareStatusBar';

const HomeScreen = () => {
  return (
    <View>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#2196F3" />
      <Counter color="red" />
    </View>
  );
};

export default HomeScreen;
