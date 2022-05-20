import React, {useState} from 'react';
import {Button, Text} from 'react-native';
import DatePicker from 'react-native-date-picker';

const DatePickerApp = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [currentMode, setCurrentMode] = useState('datetime');

  return (
    <>
      <Button
        title="Open datetime"
        onPress={() => {
          setOpen(true);
          setCurrentMode('datetime');
        }}
      />
      <Button
        title="Open date"
        onPress={() => {
          setOpen(true);
          setCurrentMode('date');
        }}
      />
      <Button
        title="Open time"
        onPress={() => {
          setOpen(true);
          setCurrentMode('time');
        }}
      />
      <DatePicker
        modal
        open={open}
        date={date}
        mode={currentMode}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default DatePickerApp;
