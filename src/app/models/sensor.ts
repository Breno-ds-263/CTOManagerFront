export interface Sensor {
  id?: number;
  dataEvento?: string;
  causa?: string;
  status?: StatusSensor | string; 
}

export enum StatusSensor {
  ALARMADO = 'ALARMADO',
  NAO_ALARMADO = 'NAO_ALARMADO'
}