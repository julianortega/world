export type WorldData ={
  country: string;
  value: number;
}

export type Country = {
  name:         Name;
  tld:          string[];
  cca2:         string;
  ccn3:         string;
  cca3:         string;
  cioc?:        string;
  independent:  boolean;
  status:       Status;
  unMember:     boolean;
  currencies:   { [key: string]: Currency };
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       Region;
  subregion:    string;
  languages:    Languages;
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  gini?:        { [key: string]: number };
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   string[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
}

export type CapitalInfo = {
  latlng: number[];
}

export type Car = {
  signs: string[];
  side:  Side;
}

export enum Side {
  Right = "right",
}

export type CoatOfArms = {
  png?: string;
  svg?: string;
}

export type Currency = {
  name:   string;
  symbol: string;
}

export type Demonyms = {
  eng:  Eng;
  fra?: Eng;
}

export type Eng = {
  f: string;
  m: string;
}

export type Flags = {
  png:  string;
  svg:  string;
  alt?: string;
}

export type Idd = {
  root:     string;
  suffixes: string[];
}

export type Languages = {
  aym?: string;
  que?: string;
  spa:  SPA;
  grn?: string;
  ber?: string;
  mey?: string;
  bjz?: string;
  eng?: string;
  cha?: string;
  fra?: string;
  por?: string;
}

export enum SPA {
  Spanish = "Spanish",
}

export type Maps = {
  googleMaps:     string;
  openStreetMaps: string;
}

export type Name = {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export type Translation = {
  official: string;
  common:   string;
}

export type PostalCode = {
  format: string;
  regex:  string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Europe = "Europe",
  Oceania = "Oceania",
}

export enum StartOfWeek {
  Monday = "monday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
}
