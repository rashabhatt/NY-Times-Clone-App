export interface SearchedNewsData {
  begin_date: string;
  end_date: string;
  facet: string;
  facet_fields: string;
  facet_filter: string;
  fl: string;
  fq: string;
  page: number;
  types: string;
  q: string;
  sort: string;
  searchData: searchData[];
}

export interface searchData {
  status: string;
  copyright: string;
  response: Response[];
}

export interface Response {
  docs: Doc[];
  meta: Meta;
}

export interface Doc {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  source: Source;
  multimedia: Multimedia[];
  headline: Headline;
  keywords: Keyword[];
  pub_date: string;
  document_type: DocumentType;
  news_desk: string;
  section_name: string;
  subsection_name?: string;
  byline: Byline;
  type_of_material: TypeOfMaterial;
  _id: string;
  word_count: number;
  uri: string;
  print_section?: string;
  print_page?: string;
}

export interface Byline {
  original: string;
  person: Person[];
  organization: null;
}

export interface Person {
  firstname: null | string;
  middlename: null | string;
  lastname: null | string;
  qualifier: null;
  title: null;
  role: Role;
  organization: string;
  rank: number;
}

export enum Role {
  Reported = 'reported',
}

export enum DocumentType {
  Article = 'article',
}

export interface Headline {
  main: string;
  kicker: null | string;
  content_kicker: null;
  print_headline: null | string;
  name: null;
  seo: null;
  sub: null;
}

export interface Keyword {
  name: Name;
  value: string;
  rank: number;
  major: Major;
}

export enum Major {
  N = 'N',
}

export enum Name {
  CreativeWorks = 'creative_works',
  Glocations = 'glocations',
  Organizations = 'organizations',
  Persons = 'persons',
  Subject = 'subject',
}

export interface Multimedia {
  rank: number;
  subtype: string;
  caption: null;
  credit: null;
  type: Type;
  url: string;
  height: number;
  width: number;
  legacy: Legacy;
  subType: string;
  crop_name: string;
}

export interface Legacy {
  xlarge?: string;
  xlargewidth?: number;
  xlargeheight?: number;
  thumbnail?: string;
  thumbnailwidth?: number;
  thumbnailheight?: number;
  widewidth?: number;
  wideheight?: number;
  wide?: string;
}

export enum Type {
  Image = 'image',
}

export enum Source {
  TheNewYorkTimes = 'The New York Times',
}

export enum TypeOfMaterial {
  News = 'News',
  OpEd = 'Op-Ed',
}

export interface Meta {
  hits: number;
  offset: number;
  time: number;
}
