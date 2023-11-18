/* eslint-disable react-native/no-inline-styles */
import React, {Fragment} from 'react';
import {StyleSheet, SafeAreaView, View, Alert, Text} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import FormInput from '../../common/components/FormInput';
import FormButton from '../../common/components/FormButton';
import ErrorMessage from '../../common/components/ErrorMessage';
import {Button} from 'react-native-elements';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .email('Pleae enter you valid email address')
    .required('Please enter a registered email'),
  password: Yup.string()
    .label('Password')
    .required()
    .min(10, 'Password must have more than 4 characters '),
});

const LoginScreen = ({navigation}) => {
  const handleSubmit = (
    values: {email: any; password: any},
    errorValue: any,
  ): any => {
    if (values.email.length > 0 && values.password.length > 0) {
      Alert.alert('Login done');
      navigation.navigate("ModalScreen")
      errorValue?.resetForm();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={(values, errorValue) => {
          handleSubmit(values, errorValue);
          errorValue?.resetForm();
        }}
        validationSchema={validationSchema}>
        {({
          handleChange,
          values,
          // eslint-disable-next-line @typescript-eslint/no-shadow
          handleSubmit,
          errors,
          isValid,
          touched,
          handleBlur,
        }) => (
          <Fragment>
            <Text
              style={{
                fontSize: 25,
                color: 'green',
                textAlign: 'center',
                marginTop: 20,
              }}>
              Formik Validation Example
            </Text>
            <View style={{marginTop: 40}}>
              <FormInput
                name="email"
                value={values.email}
                onChangeText={handleChange('email')}
                placeholder="Enter email"
                autoCapitalize="none"
                onBlur={handleBlur('email')}
                autoFocus
              />
            </View>
            <ErrorMessage errorValue={touched.email && errors.email} />
            <FormInput
              name="password"
              value={values.password}
              onChangeText={handleChange('password')}
              placeholder="Enter password"
              secureTextEntry
              onBlur={handleBlur('password')}
            />
            <ErrorMessage errorValue={touched.password && errors.password} />
            <View style={styles.buttonContainer}>
              <FormButton
                buttonType="outline"
                onPress={handleSubmit}
                title="LOGIN"
                buttonColor="white"
                disabled={!isValid}
                //loading={false}
              />
            </View>
          </Fragment>
        )}
      </Formik>
      <Button
        title="Don't have an account? Sign Up"
        onPress={() => {
          Alert.alert('test');
        }}
        titleStyle={{
          color: 'blue',
        }}
        type="clear"
      />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    margin: 25,
  },
});
