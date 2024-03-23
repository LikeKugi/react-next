import { Task } from 'gantt-task-react';
import { IKanbanTaskPriority, IKanbanTaskTypes } from '@/shared/types/tasks.types';

export interface IGanttTask extends Task {
  priority?:  IKanbanTaskPriority,
  taskType: IKanbanTaskTypes,
}
