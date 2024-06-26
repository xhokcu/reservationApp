import CustomButton from 'components/button';
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';
import { useDispatch } from 'react-redux';
import { logout } from 'store/features/auth/authSlice'; // Doğru path'i kontrol edin
import ReservationCard from 'components/card/reservationCard';

const ReservationsScreen = () => {
  const dispatch = useDispatch();
  const reservations = [
    {
      date: '2021-09-01',
      time: '10:00',
      city: 'Istanbul',
      note: 'Notes',
    },
    {
      date: '2021-09-01',
      time: '10:00',
      city: 'Istanbul',
      note: 'Notes',
    },
    {
      date: '2021-09-01',
      time: '10:00',
      city: 'Istanbul',
      note: 'Notes',
    },
  ];

  const ListHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.label}>Date</Text>
        <Text style={styles.label}>Time</Text>
        <Text style={styles.label}>City</Text>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={reservations}
        renderItem={({ item }) => (
          <ReservationCard item={item} onPress={() => console.log('Pressed')} />
        )}
        ListHeaderComponent={<ListHeader />}
      />
      <CustomButton
        buttonStyle={styles.outlineButton}
        onPress={() => dispatch(logout())}
        textStyle={styles.logoutText}
        title={'Logout'}
      />
    </View>
  );
};
export default ReservationsScreen;
