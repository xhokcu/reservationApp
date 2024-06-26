import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import CustomButton from 'components/button';
import { useDispatch, useSelector } from 'react-redux';
import { addReservation } from 'store/features/reservation/reservationSlice';
import { RootState } from 'store/store';
import uuid from 'react-native-uuid';

const CreateReservationScreen: React.FC = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [note, setNote] = useState('');
  const [city, setCity] = useState('');

  const isButtonDisabled =
    date === '' || time === '' || note === '' || city === '';

  const dispatch = useDispatch();

  const currentUser = useSelector(
    (state: RootState) => state?.auth?.authData?.userName,
  );

  const handleReset = () => {
    setDate('');
    setTime('');
    setNote('');
    setCity('');
  };

  const handleCreateReservation = () => {
    const newReservation = {
      id: uuid.v4(),
      username: currentUser || '',
      date,
      time,
      note,
      city,
    };

    dispatch(addReservation(newReservation));
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
        <View>
          <Text>Date</Text>
          <TextInput
            style={styles.input}
            placeholder="Date"
            placeholderTextColor="#cccccc"
            onChangeText={text => setDate(text)}
            value={date}
            selectionColor="#3498db"
          />
        </View>
        <View>
          <Text>Time</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter time"
            placeholderTextColor="#cccccc"
            onChangeText={text => setTime(text)}
            value={time}
            selectionColor="#3498db"
          />
        </View>
        <View>
          <Text> City</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter city"
            placeholderTextColor="#cccccc"
            onChangeText={text => setCity(text)}
            value={city}
            selectionColor="#3498db"
          />
        </View>
        <View>
          <Text> Note</Text>
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
