import React from 'react';
import {Button, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../Store/Saga/Actions/User';
import {selectUser} from '../../Store/Selectors/User';
import Layout from '../../Style/Layout';
import FocusAwareStatusBar from '../../Components/Shared/FocusAwareStatusBar';
import CustomText from '../../Components/Shared/CustomText';

const ProfileScreen = () => {
  const {username} = useSelector(selectUser);

  const dispatch = useDispatch();

  return (
    <View style={[Layout.fill, Layout.justifyContentCenter]}>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor="rgb(242, 242, 242)"
      />
      <CustomText>You're logged in as {username}</CustomText>
      <Button title="Logout" onPress={() => dispatch(logout())} />
    </View>
  );
};

export default ProfileScreen;
