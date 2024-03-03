export interface ITask {
  id: number
  col_id: number
  name: string
  priority_id: number
  following: boolean
  assignees_ids: any[]
}

export interface IColumn {
  id: number
  name: string
  order: number
}
