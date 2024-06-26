import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './styles';
import { IReservationCardProps } from 'types/IReservationCardProps';

const ReservationCard: React.FC<IReservationCardProps> = ({
  item,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{item.username}</Text>
        <Text style={styles.text}>{item.date}</Text>
        <Text style={styles.text}>{item.time}</Text>
        <Text style={styles.text}>{item.city}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ReservationCard;
