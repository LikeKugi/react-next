import { IMenuItem } from '@/types';
import { IObject } from '@/types';

export interface IHomePageProps extends IObject {
  menu: IMenuItem[];
  firstCategory: number;
}
