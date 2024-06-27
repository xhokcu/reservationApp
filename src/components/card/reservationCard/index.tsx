import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './styles';
import { IReservationCardProps } from 'types/IReservationCardProps';
import moment from 'moment';

const ReservationCard: React.FC<IReservationCardProps> = ({
  item,
  onPress,
}) => {
  const formattedDate = moment(item.date).format('MMMM Do YYYY');

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.smallText}>{item.username}</Text>
        <Text style={styles.largeText} numberOfLines={2}>
          {formattedDate}
        </Text>
        <Text style={styles.mediumText}>{item.time}</Text>
        <Text style={styles.largeText} numberOfLines={1} ellipsizeMode="tail">
          {item.city.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ReservationCard;
