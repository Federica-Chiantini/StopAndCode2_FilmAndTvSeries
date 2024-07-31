export interface Serie { //interfaccia principale oggetto
    score : number 
    show : SerieShow
  }

  export interface SerieShow {
    id: number
    url: string
    name: string
    type: string
    language: string
    genres: string[]
    status: string
    runtime: number
    averageRuntime: number
    premiered: string
    ended: any
    officialSite: string
    schedule: SerieSchedule
    rating: {
      average: number
    }
    weight: number
    network: SerieNetwork
    webChannel: any
    dvdCountry: any
    externals: SerieExternals
    image: SerieImage
    summary: string
    updated: number
    _links: SerieLinks
  }
  
  export interface SerieSchedule {
    time: string
    days: string[]
  }
  
  export interface SerieNetwork {
    id: number
    name: string
    country: Country
    officialSite: any
  }
  
  export interface Country {
    name: string
    code: string
    timezone: string
  }
  
  export interface SerieExternals {
    tvrage: number
    thetvdb: number
    imdb: string
  }
  
  export interface SerieImage {
    medium: string
    original: string
  }
  
  export interface SerieLinks {
    self: {
      href: string
    }
    previousepisode: {
      href: string
      name: string
    }
  }