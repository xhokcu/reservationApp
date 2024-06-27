import { ICity } from './ICity';
export interface IReservationCardProps {
  item: {
    username: string;
    date: Date;
    time: string;
    city: ICity;
    note: string;
  };
  onPress: () => void;
}
