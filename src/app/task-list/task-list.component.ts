import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ITask,
  StatusType,
  PriorityType,
} from '@/app/models/components.interface';

@Component({
  selector: 'task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  taskStatus: StatusType[] = ['Completada', 'En progreso', 'Pendiente'];
  tastPriority: PriorityType[] = ['Alta', 'Media', 'Baja'];

  tasks: ITask[] = [
    {
      name: 'Tarea 1',
      description: 'Descripción de la tarea 1',
      status: 'Completada',
      priority: 'Alta',
    },
    {
      name: 'Tarea 2',
      description: 'Descripción de la tarea 2',
      status: 'En progreso',
      priority: 'Media',
    },
    {
      name: 'Tarea 3',
      description: 'Descripción de la tarea 3',
      status: 'Pendiente',
      priority: 'Baja',
    },
  ];

  changeStatus(task: any) {
    console.log(task);
  }

  inputValue = '';

  updateTask(): void {
    this.tasks.push({
      name: this.inputValue,
      description: 'Descripción de ' + this.inputValue,
      status: 'Pendiente',
      priority: 'Media',
    });
  }

  refresh(): void {}
}
