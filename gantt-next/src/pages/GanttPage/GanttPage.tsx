'use client';

import { JSX, useState } from 'react';
import { Gantt, Task, ViewMode } from 'gantt-task-react';
import { getStartEndDateForProject, initTasks } from '@/shared/helpers/tasks';
import { GanttColumnWidth } from '@/shared/helpers';
import 'gantt-task-react/dist/index.css';
import { TaskListTable } from '@/entities/TaskListTable/TaskListTable';

import './GanttPage.scss'
import { IGanttTask } from '@/shared/types';

const GanttPage = (): JSX.Element => {
  const [view, setView] = useState<ViewMode>(ViewMode.Day);
  const [tasks, setTasks] = useState<Task[]>(initTasks());

  const columnWidth = GanttColumnWidth[view];

  const handleTaskChange = (task: Task) => {
    console.log('On date change Id:' + task.id);
    let newTasks = tasks.map((t) => (t.id === task.id ? task : t));
    if (task.project) {
      const [start, end] = getStartEndDateForProject(newTasks, task.project);
      const project =
        newTasks[newTasks.findIndex((t) => t.id === task.project)];
      if (
        project.start.getTime() !== start.getTime() ||
        project.end.getTime() !== end.getTime()
      ) {
        const changedProject = { ...project, start, end };
        newTasks = newTasks.map((t) =>
          t.id === task.project ? changedProject : t
        );
      }
    }
    setTasks(newTasks);
  };

  const handleTaskDelete = (task: Task) => {
    const conf = window.confirm('Are you sure about ' + task.name + ' ?');
    if (conf) {
      setTasks(tasks.filter((t) => t.id !== task.id));
    }
    return conf;
  };

  const handleProgressChange = async (task: Task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    console.log('On progress change Id:' + task.id);
  };

  const handleDblClick = (task: Task) => {
    alert('On Double Click event Id:' + task.id);
  };

  const handleSelect = (task: Task, isSelected: boolean) => {
    console.log(task.name + ' has ' + (isSelected ? 'selected' : 'unselected'));
  };

  const handleExpanderClick = (task: Task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    console.log('On expander click Id:' + task.id);
  };

  const handleAddTask = (task: Task) => {
    console.log(task);
    const currentDate = new Date();

    const newTasks: Task = {
      name: "new task",
      type: "task",
      progress: 100,
      id: new Date().getMilliseconds().toString(),
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
      project: task.id
    };
    setTasks((e) => [...e, newTasks]);
  };

  return (
    <>
      <Gantt tasks={tasks}
             // onDateChange={handleTaskChange}
             // onDelete={handleTaskDelete}
             // onProgressChange={handleProgressChange}
             onDoubleClick={handleDblClick}
             onSelect={handleSelect}
             onExpanderClick={handleExpanderClick}
             columnWidth={columnWidth}

             TaskListHeader={({ headerHeight }) => (
               <div
                 style={{
                   height: headerHeight,
                   fontFamily: "sans-serif",
                   fontWeight: "bold",
                   paddingLeft: 10,
                   margin: 0,
                   marginBottom: -1,
                   display: "flex",
                   alignItems: "center"
                 }}
               >
                 Jobs
               </div>
             )}
             TaskListTable={({tasks, ...other}) => <TaskListTable tasks={tasks as IGanttTask[]} {...other} rowWidth="362px" handleAddTask={handleAddTask} />}
             TooltipContent={({task, ...other}) => (
               <div {...other}>
                 <p>{task.name}</p>
                 <p>{(task as IGanttTask).taskType}</p>
               </div>
             )}
             barCornerRadius={8}
             barFill={80}
             todayColor="var(--color-today)"
             projectBackgroundColor="var(--color-white)"
      locale="ru-RU"/>
    </>
  );
};
export { GanttPage };
