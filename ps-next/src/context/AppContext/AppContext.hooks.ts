import { useContext } from 'react';
import { AppContext } from '@/context/AppContext/app.context';

export const useAppContext = () => useContext(AppContext);
