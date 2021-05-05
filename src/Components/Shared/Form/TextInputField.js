import React, {useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Colors, FontSize} from '../../../Style/Variables';

const TextInputField = ({field, form, ...props}) => {
  const [focusedField, setFocusedField] = useState('');
  const {errors, handleChange, handleBlur, setFieldTouched, touched} = form;
  const isFieldTouched = touched[`${field.name}`];
  const isEntryValid = isFieldTouched && !errors[`${field.name}`];

  const getBorderColor = () => {
    if (!isFieldTouched) {
      return Colors.input.normal.border;
    } else if (isEntryValid && focusedField) {
      return Colors.input.valid;
    } else if (isEntryValid) {
      return Colors.input.normal.border;
    } else if (!isEntryValid) {
      return Colors.input.invalid;
    }
  };

  const getBackgroundColor = () =>
    !!focusedField
      ? Colors.input.focused.background
      : Colors.input.normal.background;

  const getColor = () =>
    !!focusedField ? Colors.input.focused.text : Colors.input.normal.text;

  const handleOnFocus = () => {
    setFocusedField(field.name);
    setFieldTouched(field.name);
  };

  const handleOnBlur = () => {
    handleBlur(field.name);
    setFocusedField('');
  };

  return (
    <View
      style={[
        styles.wrapper,
        {
          borderColor: getBorderColor(),
          backgroundColor: getBackgroundColor(),
        },
      ]}>
      <TextInput
        onFocus={handleOnFocus}
        style={[styles.input, {color: getColor()}]}
        value={field.value}
        onChangeText={handleChange(field.name)}
        onBlur={handleOnBlur}
        placeholderTextColor={Colors.input.placeholder}
        {...props}
      />
    </View>
  );
};

TextInputField.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,
};

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
  },
  input: {
    fontSize: FontSize.small,
  },
});

export default TextInputField;
