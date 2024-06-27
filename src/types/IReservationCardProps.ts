import { ICity } from './ICity';
export interface IReservationCardProps {
  item: {
    username: string;
    date: string;
    time: string;
    city: ICity;
    note: string;
  };
  onPress: () => void;
}
