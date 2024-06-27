import { View, Text, TextInput, Alert } from 'react-native';
import { styles } from './styles';
import { useEffect, useState } from 'react';
import CustomButton from 'components/button';
import { useDispatch, useSelector } from 'react-redux';
import { addReservation } from 'store/features/reservation/reservationSlice';
import { RootState } from 'store/store';
import uuid from 'react-native-uuid';
import { Dropdown } from 'react-native-element-dropdown';
import { ICity } from 'types/ICity';
import axios from 'axios';
import DatePickerComponent from 'components/datetimepicker';
import { IReservation } from 'types/IReservation';
import useFetchCities from 'src/hooks/useFetchCities';

const CreateReservationScreen: React.FC = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState('');
  const [note, setNote] = useState('');
  const [city, setCity] = useState<ICity | null>(null);

  const isButtonDisabled = !date || time === '' || note === '' || !city;

  const dispatch = useDispatch();
  const { cities } = useFetchCities();

  const currentUser = useSelector(
    (state: RootState) => state?.auth?.authData?.userName,
  );

  const handleReset = () => {
    setDate(null);
    setTime('');
    setNote('');
    setCity(null);
  };

  const handleCreateReservation = () => {
    const newReservation = {
      id: uuid.v4() as string,
      username: currentUser || '',
      date: date as Date,
      time,
      note,
      city: city as ICity,
    };
    dispatch(addReservation(newReservation));
    Alert.alert('Success', 'Reservation created successfully');
    handleReset();
  };

  return (
    <View style={styles.screen}>
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
            <DatePickerComponent
              mode="date"
              onChange={(event, selectedDate) => {
                if (selectedDate) {
                  setDate(selectedDate);
                }
              }}
            />
          </View>
          <View style={styles.dateContainer}>
            <Text>Time*</Text>
            <DatePickerComponent
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
            />
          </View>
        </View>

        <View>
          <Text>City*</Text>
          <Dropdown
            style={styles.input}
            placeholderStyle={styles.placeholderStyle}
            data={cities}
            maxHeight={300}
            labelField="name"
            valueField="id"
            searchPlaceholder="Search..."
            placeholder="Select City"
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
          />
        </View>
      </View>
      <CustomButton
        disabled={isButtonDisabled}
        buttonStyle={
          isButtonDisabled ? styles.disabledButton : styles.filledButton
        }
        title="Create"
        onPress={handleCreateReservation}
      />
    </View>
  );
};
export default CreateReservationScreen;
