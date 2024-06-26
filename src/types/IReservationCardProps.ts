export interface IReservationCardProps {
  item: {
    date: string;
    time: string;
    city: string;
    note: string;
  };
  onPress: () => void;
}
