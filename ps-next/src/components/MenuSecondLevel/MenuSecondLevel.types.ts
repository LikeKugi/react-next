import { IMenuItem } from '@/types';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IMenuSecondLevelProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'children'> {
  menu: IMenuItem[];
  route: string;
  openSecondLevelMenu: (arg: string) => void;
}
