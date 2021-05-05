import * as Yup from 'yup';

export const LoginValidationRules = Yup.object().shape({
  username: Yup.string()
    .required('Username is required')
    .min(4, 'Username must be at least 4 characters long'),
  password: Yup.string()
    .required('Password is required')
    .min(4, 'Password must be at least 5 characters long'),
});
