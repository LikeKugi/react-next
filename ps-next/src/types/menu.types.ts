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
