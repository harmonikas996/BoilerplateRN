import React from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../Store/Saga/Actions/User';
import {selectUser} from '../../Store/Selectors/User';
import Layout from '../../Style/Layout';
import FocusAwareStatusBar from '../../Components/Shared/FocusAwareStatusBar';

const ProfileScreen = () => {
  const {username} = useSelector(selectUser);

  const dispatch = useDispatch();

  return (
    <View style={[Layout.fill, Layout.justifyContentCenter]}>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor="rgb(242, 242, 242)"
      />
      <Text>You're logged in as {username}</Text>
      <Button title="Logout" onPress={() => dispatch(logout())} />
    </View>
  );
};

export default ProfileScreen;
