import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface IDatePickerComponentProps {
  mode: 'date' | 'time';
  onChange: (event: any, selectedDate?: Date) => void;
  disabled?: boolean;
  value?: Date | string;
}

const DatePickerComponent: React.FC<IDatePickerComponentProps> = ({
  mode,
  onChange,
  disabled,
  value,
}) => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    if (value) {
      if (mode === 'date') {
        if (value instanceof Date) {
          setDate(value);
        } else if (typeof value === 'string') {
          setDate(new Date(value));
        }
      } else if (mode === 'time' && typeof value === 'string') {
        const [hours, minutes] = value.split(':').map(Number);
        const currentDate = new Date();
        currentDate.setHours(hours, minutes);
        setDate(currentDate);
      }
    }
  }, [value, mode]);

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
        minimumDate={mode === 'date' ? new Date() : undefined}
      />
    </View>
  );
};

export default DatePickerComponent;
