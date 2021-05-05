import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {LoginForm} from '../../../Components/Auth/LoginForm';
import {login} from '../../../Store/Saga/Actions/User';

const LoginScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <LoginForm onSubmit={data => dispatch(login(data))} />
    </SafeAreaView>
  );
};

export default LoginScreen;
