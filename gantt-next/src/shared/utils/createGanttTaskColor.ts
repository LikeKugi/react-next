import { IKanbanTaskTypes } from '@/shared/types';

export interface ITaskStyle {
  backgroundColor?: string;
  backgroundSelectedColor?: string;
  progressColor?: string;
  progressSelectedColor?: string;
}

export const createGanttTaskColor = (taskType: IKanbanTaskTypes): ITaskStyle => {
  switch (taskType) {
    case IKanbanTaskTypes.EPIC:
      return {
        backgroundColor: 'var(--color-gray-800)',
        backgroundSelectedColor: 'var(--color-gray-800)',
        progressColor: 'var(--color-gray-800)',
        progressSelectedColor: 'var(--color-gray-800)',
      }
    case IKanbanTaskTypes.BUG:
      return {
        backgroundColor: 'var(--color-red-5)',
        backgroundSelectedColor: 'var(--color-red-5)',
        progressColor: 'var(--color-red-5)',
        progressSelectedColor: 'var(--color-red-5)',
      }
    case IKanbanTaskTypes.STORY:
      return {
        backgroundColor: 'var(--color-yellow)',
        backgroundSelectedColor: 'var(--color-yellow)',
        progressColor: 'var(--color-yellow)',
        progressSelectedColor: 'var(--color-yellow)',
      }
    case IKanbanTaskTypes.TASK:
      return {
        backgroundColor: 'var(--color-purple-6)',
        backgroundSelectedColor: 'var(--color-purple-6)',
        progressColor: 'var(--color-purple-6)',
        progressSelectedColor: 'var(--color-purple-6)',
      }
    case IKanbanTaskTypes.SUB_TASK:
      return {
        backgroundColor: 'var(--color-green-3)',
        backgroundSelectedColor: 'var(--color-green-3)',
        progressColor: 'var(--color-green-3)',
        progressSelectedColor: 'var(--color-green-3)',
      }
    default:
      return {}
  }
}
