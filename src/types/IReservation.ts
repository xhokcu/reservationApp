import { ICity } from './ICity';

export interface IReservation {
  id: string;
  username: string;
  date: Date;
  time: string;
  note: string;
  city: ICity;
}
