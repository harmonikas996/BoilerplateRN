import * as React from 'react';
import {StatusBar} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

/*
  Use when navigating between different navigators (e.g. between 2 Stacks)
*/
const FocusAwareStatusBar = props => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
};

export default FocusAwareStatusBar;
