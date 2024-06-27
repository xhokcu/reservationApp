import CustomButton from 'components/button';
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'store/features/auth/authSlice';
import ReservationCard from 'components/card/reservationCard';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootState } from 'store/store';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setReservations } from 'store/features/reservation/reservationSlice';

interface ReservationsScreenProps {
  navigation: StackNavigationProp<any, any>;
}

const ReservationsScreen: React.FC<ReservationsScreenProps> = ({
  navigation,
}) => {
  const dispatch = useDispatch();

  const data = useSelector(
    (state: RootState) => state?.reservation?.reservations,
  );

  const ListHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.label}>User</Text>
        <Text style={styles.label}>Date</Text>
        <Text style={styles.label}>Time</Text>
        <Text style={styles.label}>City</Text>
      </View>
    );
  };

  const handleNavigationDetail = (item: any) => {
    navigation.navigate('ReservationDetails', { reservation: item });
  };

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={data}
        renderItem={({ item }) => (
          <ReservationCard
            item={item}
            onPress={() => handleNavigationDetail(item)}
          />
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
