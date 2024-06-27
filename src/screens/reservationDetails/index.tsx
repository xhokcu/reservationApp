import React, { useEffect, useState } from 'react';
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
import EditReservationForm from 'components/editReservationForm';
import axios from 'axios';
import uuid from 'react-native-uuid';

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

  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(
          'https://turkiyeapi.dev/api/v1/provinces',
        );
        const filteredData = response.data.data.map((city: any) => {
          return {
            id: uuid.v4() as string,
            name: city.name,
            latitude: city.coordinates.latitude,
            longitude: city.coordinates.longitude,
          };
        });
        setCities(filteredData); // Verilerin bulunduğu yeri kontrol edin ve doğru anahtarı kullanın.
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };

    fetchCities();
  }, []);

  const dispatch = useDispatch();

  const [date, setDate] = useState(reservation.date);
  const [time, setTime] = useState(reservation.time);
  const [city, setCity] = useState(reservation.city);
  const [note, setNote] = useState(reservation.note);

  const username = route?.params?.reservation?.username;
  const currentUser = useSelector(
    (state: RootState) => state.auth.authData?.userName,
  );
  const isButtonDisabled = !date || time === '' || note === '' || !city;
  const isEditable = username === currentUser;

  const handleDeleteReservation = () => {
    dispatch(deleteReservation(reservation.id));
    Alert.alert('Reservation deleted successfully');
    navigation.navigate('Reservations');
  };

  const handleUpdateReservation = () => {
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
  const reservationFormProps = {
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
  };

  return (
    <View style={styles.screen}>
      <EditReservationForm {...reservationFormProps} />
      {isEditable && (
        <View style={styles.buttonContainer}>
          <CustomButton
            buttonStyle={styles.errorButton}
            title="Delete"
            onPress={handleDeleteReservation}
          />
          <CustomButton
            disabled={isButtonDisabled}
            buttonStyle={
              isButtonDisabled ? styles.disabledButton : styles.filledButton
            }
            title="Save"
            onPress={handleUpdateReservation}
          />
        </View>
      )}
    </View>
  );
};

export default ReservationDetailsScreen;
