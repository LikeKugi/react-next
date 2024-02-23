import { IMenuItem, IObject, IPageModel, IProductModel, ITopLevelCategory } from '@/types';

export interface ITopPageProps extends IObject {
  menu: IMenuItem[];
  firstCategory: ITopLevelCategory;
  page: IPageModel;
  products: IProductModel[];
}
