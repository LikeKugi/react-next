export const enum ITopLevelCategory {
  COURSES,
  SERVICES,
  BOOKS,
  PRODUCTS,
}

export interface IPageAdvantage {
  id: string;
  title: string;
  description: string;
}

export interface IHeadHunterData {
  id: string;
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updatedAt: Date;
}

export interface IPageModel {
  tags: string[];
  id: string;
  secondCategory: string;
  alias: string;
  title?: string;
  category: string;
  seoText?: string;
  tagsTitle: string;
  metaTitle: string;
  metaDescription: string;
  firstCategory: ITopLevelCategory;
  advantages: IPageAdvantage[] ;
  createdAt: Date;
  updatedAt: Date;
  hh?: IHeadHunterData;
}
