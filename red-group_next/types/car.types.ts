export interface ICar {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface ICarData {
  payload: ICar[];
}

export interface ISingleCarData {
  payload: ICar;
}
