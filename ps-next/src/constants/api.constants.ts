export type IApiDescription = 'FIND' | 'BY_ALIAS' | 'FIND_PRODUCT'

export interface IApiRoute {
  path: string;
}

export const API_PATH: Record<IApiDescription, IApiRoute> = {
  FIND: {
    path: process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
  },

  BY_ALIAS: {
    path: process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/byAlias",
  },

  FIND_PRODUCT: {
    path: process.env.NEXT_PUBLIC_DOMAIN + "/api/product/find",
  }
}
