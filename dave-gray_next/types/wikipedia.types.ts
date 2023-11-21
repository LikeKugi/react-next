export interface IResult {
  pageId: number,
  title: string,
  thumbnail?: {
    source: string,
    width: number,
    height: number
  },
  pageimage: string,
  extract: string,
}

export interface ISearchResult {
  query?: {
    pages?: { [T: string]: IResult, }
  }
}
