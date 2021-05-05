import React from 'react';
import PropTypes from 'prop-types';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const FullScreenLoader = ({
  color = 'black',
  backgroundColor = 'white',
  size = 'large',
}) => {
  return (
    <View
      style={[StyleSheet.absoluteFill, styles.container, {backgroundColor}]}>
      <ActivityIndicator color={color} size={size} />
    </View>
  );
};

FullScreenLoader.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['large', 'small']),
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FullScreenLoader;
