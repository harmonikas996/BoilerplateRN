import React from 'react';
import {View, Button} from 'react-native';
import {Formik, Field} from 'formik';
import PropTypes from 'prop-types';
import TextInputField from '../Shared/Form/TextInputField';
import {LoginValidationRules} from '../../Validation/Auth';

export const LoginForm = ({onSubmit}) => (
  <Formik
    initialValues={{username: '', passwrod: ''}}
    onSubmit={onSubmit}
    validationSchema={LoginValidationRules}>
    {({handleSubmit, isValid, dirty}) => (
      <View>
        <View>
          <Field
            name="username"
            component={TextInputField}
            placeholder={'Username'}
            autoCapitalize="none"
          />
          <Field
            name="password"
            component={TextInputField}
            placeholder={'Password'}
            autoCapitalize="none"
            secureTextEntry
          />
        </View>
        <Button
          title="Login"
          onPress={handleSubmit}
          disabled={!(dirty && isValid)}
        />
      </View>
    )}
  </Formik>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};
