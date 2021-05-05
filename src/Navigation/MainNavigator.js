import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainTabs from './MainTabs';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainTabs" component={MainTabs} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
