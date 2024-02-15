import { createContext } from 'react';
import { IAppContext } from '@/context/AppContext/AppContext.types';
import { ITopLevelCategory } from '@/types';

export const AppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: ITopLevelCategory.COURSES,
  setMenu: () => null,
});
