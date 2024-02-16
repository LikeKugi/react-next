import { IPageItem } from '@/types';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IMenuThirdLevelProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'children'> {
  pages: IPageItem[],
  route: string,
}
