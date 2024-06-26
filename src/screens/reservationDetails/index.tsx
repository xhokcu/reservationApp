import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { IReservation } from 'types/IReservation';
import { styles } from './styles';
import CustomButton from 'components/button';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteReservation,
  updateReservation,
} from 'store/features/reservation/reservationSlice';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootState } from 'store/store';

type RootStackParamList = {
  ReservationDetails: { reservation: IReservation };
};

interface ReservationDetailsScreenProps {
  navigation: StackNavigationProp<any, any>;
  route: RouteProp<RootStackParamList, 'ReservationDetails'>;
}

const ReservationDetailsScreen: React.FC<ReservationDetailsScreenProps> = ({
  navigation,
  route,
}) => {
  const { reservation } = route?.params;

  const dispatch = useDispatch();

  const [date, setDate] = useState(reservation.date);
  const [time, setTime] = useState(reservation.time);
  const [city, setCity] = useState(reservation.city);
  const [note, setNote] = useState(reservation.note);

  const username = route?.params?.reservation?.username;
  const currentUser = useSelector(
    (state: RootState) => state.auth.authData?.userName,
  );
  const isButtonDisabled =
    date === '' || time === '' || note === '' || city === '';
  const isEditable = username === currentUser;

  const handleDeleteReservation = () => {
    dispatch(deleteReservation(reservation.id));
    Alert.alert('Reservation deleted successfully');
    navigation.navigate('Reservations');
  };

  const handleUpdateReservation = () => {
    // Update reservation logic goes here
    const updatedReservation = {
      ...reservation,
      date,
      time,
      city,
      note,
    };
    dispatch(updateReservation(updatedReservation));
    Alert.alert('Reservation updated successfully');
  };

  return (
    <View style={styles.screen}>
      <View>
        <View>
          <Text>User</Text>
          <TextInput
            style={styles.disabledInput}
            placeholder="Date"
            placeholderTextColor="#cccccc"
            onChangeText={text => setDate(text)}
            value={username}
            selectionColor="#3498db"
            editable={false}
          />
        </View>
        <View>
          <Text>Date</Text>
          <TextInput
            style={isEditable ? styles.input : styles.disabledInput}
            placeholder="Date"
            placeholderTextColor="#cccccc"
            onChangeText={text => setDate(text)}
            value={date}
            selectionColor="#3498db"
            editable={isEditable}
          />
        </View>
        <View>
          <Text>Time</Text>
          <TextInput
            style={isEditable ? styles.input : styles.disabledInput}
            placeholder="Enter time"
            placeholderTextColor="#cccccc"
            onChangeText={text => setTime(text)}
            value={time}
            selectionColor="#3498db"
            editable={isEditable}
          />
        </View>
        <View>
          <Text>City</Text>
          <TextInput
            style={isEditable ? styles.input : styles.disabledInput}
            placeholder="Enter city"
            placeholderTextColor="#cccccc"
            onChangeText={text => setCity(text)}
            value={city}
            selectionColor="#3498db"
            editable={isEditable}
          />
        </View>
        <View>
          <Text>Note</Text>
          <TextInput
            style={isEditable ? styles.input : styles.disabledInput}
            placeholder="Enter note"
            placeholderTextColor="#cccccc"
            onChangeText={text => setNote(text)}
            value={note}
            selectionColor="#3498db"
            editable={isEditable}
          />
        </View>
      </View>
      {isEditable && (
        <View style={styles.buttonContainer}>
          <CustomButton
            buttonStyle={styles.errorButton}
            title="Delete"
            onPress={handleDeleteReservation}
          />
          <CustomButton
            disabled={isButtonDisabled}
            buttonStyle={styles.filledButton}
            title="Save"
            onPress={handleUpdateReservation}
          />
        </View>
      )}
    </View>
  );
};

export default ReservationDetailsScreen;
