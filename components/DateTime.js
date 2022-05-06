import React, {useState} from 'react';
import {Button, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModel from 'react-native-modal-datetime-picker';

const DateTime = () => {
  const [date, setDate] = useState(new Date());
  const [displayMode, setDisplayMode] = useState('time');
  const [isDateVisible, setIsDateVisible] = useState(false);

  const changeSelectedDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setIsDateVisible(true);
    setDisplayMode(currentMode);
  };

  const displayTimePicker = () => {
    showMode('time', 'date');
  };

  return (
    <View>
      <Button title="Show Date Picker" onPress={displayTimePicker} />
      {isDateVisible && (
        <DateTimePicker
          value={date}
          mode={displayMode}
          is24Hour={true}
          display="default"
          onChange={changeSelectedDate}
        />
      )}
    </View>
  );
};

export default DateTime;
