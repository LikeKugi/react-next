import { IKanbanTask, IKanbanTaskPriority, IKanbanTaskTypes } from '@/shared/types';

export const kanbanTasks:IKanbanTask[] = [
  {
    id: '0',
    name: 'Первая задача с длинным названием',
    tag: 'Метка',
    type: IKanbanTaskTypes.BUG,
    deadline: '19 февраля',
    priority: IKanbanTaskPriority.LOWEST,
    users: [
      {
        id: 0,
        display_name: 'orange_apple27',
        avatar: '',
      }
    ]
  },
  {
    id: '1',
    name: 'Первая задача с длинным названием',
    type: IKanbanTaskTypes.EPIC,
    users: []
  },
  {
    id: '2',
    name: 'Первая задача с длинным названием',
    type: IKanbanTaskTypes.SUB_TASK,
    deadline: '19 февраля',
    priority: IKanbanTaskPriority.HIGHEST,
    users: [
      {
        id: 0,
        display_name: 'orange_apple27',
        avatar: '',
      }
    ]
  },
  {
    id: '3',
    name: 'Первая задача с длинным названием',
    tag: 'Метка',
    type: IKanbanTaskTypes.STORY,
    deadline: '19 февраля',
    priority: IKanbanTaskPriority.HIGHEST,
    users: [
      {
        id: 0,
        display_name: 'orange_apple27',
        avatar: '',
      }
    ]
  },
  {
    id: '4',
    name: 'Задача',
    tag: 'Метка',
    type: IKanbanTaskTypes.STORY,
    deadline: '19 февраля',
    priority: IKanbanTaskPriority.LOWEST,
    users: [
      {
        id: 0,
        display_name: 'orange_apple27',
        avatar: '',
      }
    ]
  },
  {
    id: '5',
    name: 'Первая задача с длинным названием',
    tag: 'Метка',
    type: IKanbanTaskTypes.SUB_TASK,
    deadline: '19 февраля',
    priority: IKanbanTaskPriority.MEDIUM,
    users: [
      {
        id: 0,
        display_name: 'orange_apple27',
        avatar: '',
      }
    ]
  },
  {
    id: '6',
    name: 'Первая задача с длинным названием',
    tag: 'Метка',
    type: IKanbanTaskTypes.STORY,
    deadline: '19 февраля',
    users: [
      {
        id: 0,
        display_name: 'orange_apple27',
        avatar: '',
      }
    ]
  },
  {
    id: '7',
    name: 'Задача',
    tag: 'Метка',
    type: IKanbanTaskTypes.SUB_TASK,
    deadline: '19 февраля',
    users: [
      {
        id: 0,
        display_name: 'orange_apple27',
        avatar: '',
      }
    ]
  },
  {
    id: '8',
    name: '150 символов Недавно мы в MakeRight.ru с удовольствием прочитали книгу «Scrum. Революционный метод управления проектами» Джеффа Сазерленда. О чем она?',
    tag: 'Метка',
    type: IKanbanTaskTypes.TASK,
    deadline: '19 февраля',
    priority: IKanbanTaskPriority.LOWEST,
    users: [
      {
        id: 0,
        display_name: 'orange_apple27',
        avatar: '',
      }
    ]
  },
  {
    id: '9',
    name: 'Первая задача с длинным названием',
    type: IKanbanTaskTypes.EPIC,
    deadline: '19 февраля',
    users: [
      {
        id: 0,
        display_name: 'orange_apple27',
        avatar: '',
      }
    ]
  },
  {
    id: '10',
    name: 'Первая задача с длинным названием',
    tag: 'Метка',
    type: IKanbanTaskTypes.SUB_TASK,
    deadline: '19 февраля',
    users: [
      {
        id: 0,
        display_name: 'orange_apple27',
        avatar: '',
      },
      {
        id: 1,
        display_name: 'Gennadiy',
        avatar: '',
      },
      {
        id: 2,
        display_name: 'mary97',
        avatar: '',
      }
    ]
  },
  {
    id: '11',
    name: 'Первая задача с длинным названием',
    type: IKanbanTaskTypes.SUB_TASK,
    users: [],
  },
  {
    id: '12',
    name: 'Первая задача с длинным названием',
    type: IKanbanTaskTypes.STORY,
    priority: IKanbanTaskPriority.HIGHEST,
    deadline: '19 февраля',
    users: [
      {
        id: 0,
        display_name: 'orange_apple27',
        avatar: '',
      }
    ]
  },
  {
    id: '13',
    name: 'Первая задача с длинным названием',
    tag: 'Метка',
    type: IKanbanTaskTypes.SUB_TASK,
    deadline: '19 февраля',
    users: [
      {
        id: 0,
        display_name: 'orange_apple27',
        avatar: '',
      },
      {
        id: 1,
        display_name: 'Gennadiy',
        avatar: '',
      },
      {
        id: 2,
        display_name: 'mary97',
        avatar: '',
      }
    ]
  },
  {
    id: '14',
    name: 'Первая задача с длинным названием',
    type: IKanbanTaskTypes.BUG,
    priority: IKanbanTaskPriority.MEDIUM,
    deadline: '19 февраля',
    users: [
      {
        id: 0,
        display_name: 'orange_apple27',
        avatar: '',
      }
    ]
  },
]
