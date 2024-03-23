import { FC, JSX } from 'react';
import { Task } from 'gantt-task-react';
import { IGanttTask } from '@/shared/types';

type TaskListTableProps = {
  rowHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
  locale: string;
  tasks: IGanttTask[];
  selectedTaskId: string;
  setSelectedTask: (taskId: string) => void;
  onExpanderClick: (task: Task) => void;
  handleAddTask: (task: Task) => void;
};

const TaskListTable: FC<TaskListTableProps> = ({
                                                 tasks,
                                                 rowWidth,
                                                 rowHeight,
                                                 onExpanderClick,
                                                 handleAddTask
                                               }): JSX.Element => {
  return (
    <div style={{ border: "1px solid #dfe1e5" }}>
      {tasks.map((item, i) => {
        const isProject = item.type === "project";
        return (
          <div
            key={item.id}
            style={{
              height: rowHeight,
              width: rowWidth,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: isProject ? "pointer" : "auto",
              fontFamily: "sans-serif",
              background: i % 2 ? "var(--color-gantt-row)" : "var(--color-white)",
              padding: 10,
              paddingLeft: isProject ? 10 : 40
            }}
          >
            <p
              onClick={() => onExpanderClick(item)}
              style={{
                display: "flex",
                alignItems: "center",
                margin: 0
              }}
            >
              {isProject ? "> " : ""}
              {item.taskType}
            </p>
            {isProject && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 20,
                  height: 20,
                  padding: "3px",
                  backgroundColor: "#dfe1e5",
                  borderRadius: 5
                }}
                onClick={() => handleAddTask(item)}
              >
                +
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export { TaskListTable };
