export interface ICompany {
  name: string
  catchPhrase: string
  bs: string
}
export interface IAddress {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: IGeo
}

export interface IGeo {
  lat: string
  lng: string
}

export interface IUser {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
  company: ICompany
  address: IAddress
}

