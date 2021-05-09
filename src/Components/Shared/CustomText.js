import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import {Colors, FontSize} from '../../Style/Variables';

const CustomText = ({
  children,
  size = FontSize.regular,
  color = Colors.text,
  align = undefined,
  backgroundColor = undefined,
  style = undefined,
  ...props
}) => (
  <Text
    style={[{fontSize: size, color, textAlign: align, backgroundColor}, style]}
    {...props}>
    {children}
  </Text>
);

CustomText.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  align: PropTypes.oneOf(['auto', 'center', 'left', 'right', 'justify']),
  backgroundColor: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default CustomText;
