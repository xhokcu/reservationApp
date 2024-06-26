export interface IReservationCardProps {
  item: {
    username: string;
    date: string;
    time: string;
    city: string;
    note: string;
  };
  onPress: () => void;
}
