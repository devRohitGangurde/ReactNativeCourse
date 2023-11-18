/* eslint-disable react-native/no-inline-styles */

import {View, Button, Text} from 'react-native';
import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const DateTimePicker = () => {
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const handleConfirm = date => {
    console.log(date);
    setSelectedDate(moment(date).format('MMMM'));
    //moment(date).format('MMMM Do YYYY, h:mm:ss a');
  };

  const handleCancle = () => {
    setDatePickerVisible(false);
  };
  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  return (
    <View style={{flex: 1}}>
      <Button
        title="Show Date Picker"
        onPress={() => {
          showDatePicker();
        }}
      />
      <Text style={{fontSize: 20, color: 'green'}}>
        {'Selected Date is ' + selectedDate}
      </Text>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={handleCancle}
      />
    </View>
  );
};

export default DateTimePicker;
