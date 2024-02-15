import { IMenuItem, ITopLevelCategory } from '@/types';

export interface IAppContext {
  menu: IMenuItem[];
  firstCategory: ITopLevelCategory;
  setMenu?: (newMenu: IMenuItem[]) => void;
}
