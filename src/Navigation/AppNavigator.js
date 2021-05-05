import * as React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import FullScreenLoader from '../Components/Shared/FullScreenLoader';
import {selectUserIsLoading, selectUserToken} from '../Store/Selectors/User';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const AppNavigator = () => {
  const isLoading = useSelector(selectUserIsLoading);
  const userToken = useSelector(selectUserToken);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return userToken == null ? <AuthNavigator /> : <MainNavigator />;
};

export default AppNavigator;
