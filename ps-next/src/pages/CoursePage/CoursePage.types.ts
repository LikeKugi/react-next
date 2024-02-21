import { IMenuItem, IObject, IPageModel, IProductModel, ITopLevelCategory } from '@/types';

export interface ICoursePageProps extends IObject {
  menu: IMenuItem[];
  firstCategory: ITopLevelCategory;
  page: IPageModel;
  products: IProductModel[];
}
