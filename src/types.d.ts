export type WorldData = {
  country: string;
  value: number;
}

export type Country = {
  flags:      Flags;
  name:       Name;
  cca2:       string;
  capital:    string[];
  region:     Region;
  languages:  { [key: string]: string };
  population: number;
}

export type Flags = {
  png: string;
  svg: string;
  alt: string;
}

export type Name = {
  common:     string;
  official:   string;
  nativeName: { [key: string]: NativeName };
}

export type NativeName = {
  official: string;
  common:   string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}
