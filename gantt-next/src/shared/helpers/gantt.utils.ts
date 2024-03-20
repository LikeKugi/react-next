import { ViewMode } from 'gantt-task-react';

export const GanttColumnWidth: Record<ViewMode, number> = {
  [ViewMode.QuarterDay]: 90,
  [ViewMode.HalfDay]: 90,
  [ViewMode.Day]: 90,
  [ViewMode.Week]: 100,
  [ViewMode.Hour]: 90,
  [ViewMode.Month]: 90,
  [ViewMode.Year]: 90,
}
