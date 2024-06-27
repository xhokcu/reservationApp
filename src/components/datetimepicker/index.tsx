import React, { useEffect, useState } from 'react';
import { View, Text, Platform, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from './styles';

interface IDatePickerComponentProps {
  mode: 'date' | 'time';
  onChange: (event: any, selectedDate?: Date) => void;
  disabled?: boolean;
  value?: any;
}

const DatePickerComponent: React.FC<IDatePickerComponentProps> = ({
  mode,
  onChange,
  disabled,
  value,
}) => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    if (value) {
      // setDate(value);
    }
  }, [value]);

  const onDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    onChange(event, currentDate);
  };

  return (
    <View>
      <DateTimePicker
        disabled={disabled}
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
