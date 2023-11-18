import React from 'react';
import {Button} from 'react-native-elements';

const FormButton = ({title, buttonType, buttonColor, ...rest}: any) => (
  <Button
    {...rest}
    type={buttonType}
    title={title}
    st
    // eslint-disable-next-line react-native/no-inline-styles
    buttonStyle={{
      borderColor: buttonColor,
      borderRadius: 20,
      marginHorizontal: 30,
      backgroundColor: 'green',
    }}
    titleStyle={{color: buttonColor}}
  />
);

export default FormButton;
