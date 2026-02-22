import { Modelo } from './modelo';
import { Sensor } from './sensor';

export interface CTO {
  id?: number;
  nome: string;
  latitude: number;
  longitude: number;
  modelo: Modelo;
  sensor?: Sensor;
}