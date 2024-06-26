import React, { useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { styles } from './styles';

export const dummyReservations = [
  {
    id: 1,
    user: 'Alice',
    date: '2024-07-01',
    time: '10:00',
    note: 'Breakfast meeting',
    city: 'Istanbul',
    latitude: 41.0082,
    longitude: 28.9784,
  },
  {
    id: 2,
    user: 'Bob',
    date: '2024-07-02',
    time: '15:30',
    note: 'Conference call',
    city: 'Ankara',
    latitude: 39.9334,
    longitude: 32.8597,
  },
  {
    id: 3,
    user: 'Charlie',
    date: '2024-07-03',
    time: '12:00',
    note: 'Lunch with clients',
    city: 'Izmir',
    latitude: 38.4192,
    longitude: 27.1287,
  },
  {
    id: 4,
    user: 'David',
    date: '2024-07-04',
    time: '09:00',
    note: 'Training session',
    city: 'Bursa',
    latitude: 40.1885,
    longitude: 29.0611,
  },
  {
    id: 5,
    user: 'Emma',
    date: '2024-07-05',
    time: '17:00',
    note: 'Dinner reservation',
    city: 'Antalya',
    latitude: 36.8969,
    longitude: 30.7133,
  },
];

const MapScreen = () => {
  const [selectedReservation, setSelectedReservation] = React.useState(null);

  const handleMarkerPress = reservation => {
    setSelectedReservation(reservation);
  };

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
        {dummyReservations.map(reservation => (
          <Marker
            key={reservation.id}
            coordinate={{
              latitude: reservation.latitude,
              longitude: reservation.longitude,
            }}
            onPress={() => handleMarkerPress(reservation)}
          >
            <Callout>
              <Text>{reservation.user}</Text>
              <Text>
                {reservation.date} | {reservation.time}
              </Text>
              <Text>{reservation.note}</Text>
              <Text>{reservation.city}</Text>
            </Callout>
          </Marker>
        ))}
      </MapView>

      {selectedReservation && (
        <View style={styles.selectedReservationContainer}>
          <Text style={styles.selectedReservationText}>
            {selectedReservation.user}
          </Text>
          <Text style={styles.selectedReservationText}>
            {selectedReservation.date} | {selectedReservation.time}
          </Text>
          <Text style={styles.selectedReservationText}>
            {selectedReservation.note}
          </Text>
          <Text style={styles.selectedReservationText}>
            {selectedReservation.city}
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
