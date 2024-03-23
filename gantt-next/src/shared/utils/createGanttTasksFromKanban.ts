import { IGanttTask, IKanbanTask, IKanbanTaskTypes } from '@/shared/types';
import { createGanttTaskColor } from '@/shared/utils/createGanttTaskColor';

const currentDate = new Date();

export const createGanttTasksFromKanban = (tasks: IKanbanTask[]): IGanttTask[] => (

  tasks.map(task => ({
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
    id: `${task.id}`,
    name: task.name,
    type: task.type === IKanbanTaskTypes.EPIC ? 'project' : 'task',
    progress: 100,
    priority: task.priority,
    taskType: task.type,
    styles: createGanttTaskColor(task.type)
  }))
)
