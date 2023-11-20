export interface IRoute {
  path: string,
  description: string
}

export const routes: IRoute[] = [
  {path: '/', description: 'Main'},
  {path: '/about', description: 'About'},
  {path: '/users', description: 'Users'},
  {path: '/search', description: 'Search'},
]
