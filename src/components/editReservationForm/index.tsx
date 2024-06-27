import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';
import DatePickerComponent from 'components/datetimepicker';
import { Dropdown } from 'react-native-element-dropdown';
import { ICity } from 'types/ICity';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import moment from 'moment';

interface EditReservationFormProps {
  date: Date | null;
  time: string;
  note: string;
  city: ICity | null;
  setDate: (date: Date) => void;
  setTime: (time: string) => void;
  setCity: (city: ICity) => void;
  setNote: (note: string) => void;
  cities: ICity[];
  isEditable: boolean;
}

const EditReservationForm: React.FC<EditReservationFormProps> = ({
  date,
  time,
  note,
  city,
  setDate,
  setTime,
  setCity,
  setNote,
  cities,
  isEditable,
}) => {
  const currentUser = useSelector(
    (state: RootState) => state.auth.authData?.userName,
  );
  const formattedDate = moment(date).format('MMMM Do YYYY');

  return (
    <View style={styles.inputContainer}>
      <View>
        <Text>Username</Text>
        <TextInput
          style={styles.disableInput}
          placeholder="Username"
          placeholderTextColor="#cccccc"
          editable={false}
          value={currentUser}
          selectionColor="#3498db"
        />
      </View>
      <View style={styles.dateTimeContainer}>
        <View style={styles.dateContainer}>
          <Text>Date*</Text>
          {isEditable ? (
            <DatePickerComponent
              mode="date"
              onChange={(event, selectedDate) => {
                if (selectedDate) {
                  setDate(selectedDate);
                }
              }}
              value={date as Date}
            />
          ) : (
            <View style={styles.inActiveContainer}>
              <Text>{formattedDate}</Text>
            </View>
          )}
        </View>
        <View style={styles.dateContainer}>
          <Text>Time*</Text>
          {isEditable ? (
            <DatePickerComponent
              disabled={!isEditable}
              mode="time"
              onChange={(event, selectedDate) => {
                const selectedTime = selectedDate?.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                });
                if (selectedTime) {
                  setTime(selectedTime);
                }
              }}
              value={time as string}
            />
          ) : (
            <View style={styles.inActiveContainer}>
              <Text>{time}</Text>
            </View>
          )}
        </View>
      </View>
      <View>
        <Text>City*</Text>
        <Dropdown
          disable={!isEditable}
          style={styles.input}
          placeholderStyle={styles.placeholderStyle}
          data={cities}
          maxHeight={300}
          labelField="name"
          valueField="id"
          placeholder={city?.name || 'Select city'}
          value={city}
          onChange={(item: ICity) =>
            setCity({
              id: item.id,
              name: item.name,
              latitude: item.latitude,
              longitude: item.longitude,
            } as ICity)
          }
        />
      </View>
      <View>
        <Text>Note*</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter note"
          placeholderTextColor="#cccccc"
          onChangeText={text => setNote(text)}
          value={note}
          selectionColor="#3498db"
          editable={isEditable}
        />
      </View>
    </View>
  );
};

export default EditReservationForm;
