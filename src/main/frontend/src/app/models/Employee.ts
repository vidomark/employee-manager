import { Occupation } from './Occupation';

export interface Employee {
  id?: number;
  name: string;
  email: string;
  phoneNumber: string;
  imageUrl: string;
  occupation: Occupation;
}
