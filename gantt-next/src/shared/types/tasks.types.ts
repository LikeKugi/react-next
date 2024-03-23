
export interface IKanbanItem {
  id: number | string;
  title: string;
  description: string;
  files?: string[];
  mark: string;
  status: string;
  column_id: number | string;
}

export interface IKanbanColumn {
  id: number | string;
  title: string;
}

export interface IKanbanUser {
  id: number | string;
  display_name: string;
  nickname: string;
  email: string;
  password: string;
  avatar: string;
}

export interface IKanbanUserRole {
  id: number | string;
  role: string;
}

export type IKanbanTaskUser = Pick<IKanbanUser, 'id' | 'avatar' | 'display_name'>

export const enum IKanbanTaskTypes {
  EPIC = 'epic',
  STORY = 'story',
  TASK = 'task',
  BUG = 'bug',
  SUB_TASK = 'sub-task',
}


export const enum IKanbanTaskPriority {
  HIGHEST = 'highest',
  MEDIUM = 'medium',
  LOWEST = 'lowest',
}

export interface IKanbanTask {
  id: string | number;
  name: string;
  tag?: string;
  status?: string;
  type: IKanbanTaskTypes;
  priority?: IKanbanTaskPriority;
  deadline?: string;
  users: IKanbanTaskUser[];
}

export type IKanbanOrderedItems = Record<number | string, IKanbanTask[]>
