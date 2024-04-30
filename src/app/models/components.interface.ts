export type PriorityType = 'Alta' | 'Media' | 'Baja';
export type StatusType = 'Completada' | 'En progreso' | 'Pendiente';

export interface ITask {
  name: string;
  description: string;
  priority: PriorityType;
  status: StatusType;
}

export interface IStatus {
  key: StatusType;
  text: string;
}

export interface IPriority {
  key: PriorityType;
  text: string;
}
