import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import {Colors, FontSize} from '../../Style/Variables';

const CustomText = ({
  children,
  size = FontSize.regular,
  color = Colors.text,
  backgroundColor = undefined,
  ...props
}) => (
  <Text style={{color, backgroundColor, fontSize: size}} {...props}>
    {children}
  </Text>
);

CustomText.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default CustomText;
