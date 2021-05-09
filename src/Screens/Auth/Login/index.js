import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {LoginForm} from '../../../Components/Auth/LoginForm';
import FocusAwareStatusBar from '../../../Components/Shared/FocusAwareStatusBar';
import {login} from '../../../Store/Saga/Actions/User';

const LoginScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <LoginForm onSubmit={data => dispatch(login(data))} />
    </SafeAreaView>
  );
};

export default LoginScreen;
