import { FC, JSX, PropsWithChildren, useState } from 'react';
import { AppContext } from '@/context/AppContext/app.context';
import { IAppContext } from '@/context/AppContext/AppContext.types';
import { IMenuItem } from '@/types';

const AppContextProvider: FC<PropsWithChildren<IAppContext>> = ({
                                                                  children,
                                                                  menu,
                                                                  setMenu,
                                                                  firstCategory
                                                                }): JSX.Element => {

  const [menuState, setMenuState] = useState<IMenuItem[]>(menu)

  const setNewMenu = (newMenu: IMenuItem[]) => {
    setMenuState(newMenu);
  }

  return (
    <AppContext.Provider value={{menu: menuState, firstCategory, setMenu: setNewMenu}}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
