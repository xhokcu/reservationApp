import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { IReservation } from 'types/IReservation';
import moment from 'moment';

const MapScreen = () => {
  const [selectedReservation, setSelectedReservation] =
    useState<IReservation | null>(null);

  const handleMarkerPress = (reservation: IReservation) => {
    setSelectedReservation(reservation);
  };

  const data = useSelector(
    (state: RootState) => state?.reservation?.reservations,
  );

  const selectedReservationDate = moment(selectedReservation?.date).format(
    'MMMM Do YYYY',
  );

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 39.925533,
          longitude: 32.866287,
          latitudeDelta: 8,
          longitudeDelta: 8,
        }}
      >
        {data.map(reservation => {
          const formattedDate = moment(reservation.date).format('MMMM Do YYYY');

          return (
            <Marker
              key={reservation.id}
              coordinate={{
                latitude: reservation.city.latitude,
                longitude: reservation.city.longitude,
              }}
              onPress={() => handleMarkerPress(reservation)}
            >
              <Callout>
                <Text>{reservation.username}</Text>
                <Text>
                  {formattedDate} | {reservation.time}
                </Text>
                <Text>{reservation.note}</Text>
                <Text>{reservation.city.name}</Text>
              </Callout>
            </Marker>
          );
        })}
      </MapView>

      {selectedReservation && (
        <View style={styles.selectedReservationContainer}>
          <Text style={styles.selectedReservationText}>
            {selectedReservation.username}
          </Text>
          <Text style={styles.selectedReservationText}>
            {selectedReservationDate} | {selectedReservation.time}
          </Text>
          <Text style={styles.selectedReservationText}>
            {selectedReservation.note}
          </Text>
          <Text style={styles.selectedReservationText}>
            {selectedReservation.city.name}
          </Text>
          <TouchableOpacity
            onPress={() => setSelectedReservation(null)}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
export default MapScreen;
