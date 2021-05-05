import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './Store';
import AppNavigator from './Navigation/AppNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
