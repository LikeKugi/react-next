import { ITopLevelCategory } from '@/types/page.types';
import { ReactNode } from 'react';

export interface IPageItem {
  alias: string;
  title: string;
  id: string;
  category: string;
}
export interface IMenuItem {
  _id: {
    secondCategory: string;
  };
  pages: IPageItem[];
  isOpened?: boolean;
}

export interface IFirstLevelMenuItem {
  route: string;
  name: string;
  icon: ReactNode;
  id: ITopLevelCategory;
}
