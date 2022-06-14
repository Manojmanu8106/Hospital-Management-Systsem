import { Doctor } from './doctor.model';
export interface Patient {
  id: number;
  name: string;
  doctorVisited: Doctor;
  dateOfAppointment: Date;
  prescription: string;
}
