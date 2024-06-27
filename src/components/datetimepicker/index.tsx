import React, { useState } from 'react';
import { View, Text, Platform, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from './styles';

interface IDatePickerComponentProps {
  mode: 'date' | 'time';
  onChange: (event: any, selectedDate?: Date) => void;
}

const DatePickerComponent: React.FC<IDatePickerComponentProps> = ({
  mode,
  onChange,
}) => {
  const [date, setDate] = useState(new Date());

  const onDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    onChange(event, currentDate);
  };

  return (
    <View>
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={mode}
        display="default"
        onChange={onDateChange}
      />
    </View>
  );
};

export default DatePickerComponent;
