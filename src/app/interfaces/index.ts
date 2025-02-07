export interface ICard {
  id: string;
  title: string;
  prize: string;
  rating: string;
  img: string;
  description: string;
  comments: string[];
  type: FilterType;
}

export interface FilteredData {
  search: string;
  page: number;
  isLessThan500: boolean;
  isFrom500to1000: boolean;
  isFrom1000to2000: boolean;
  isUp2000: boolean;
}

export enum FilterType {
  All = 'All',
  TVs = 'TVs',
  Appliances = 'Appliances',
  Phones = 'Phones',
  VideoGames = 'Video Games',
  Laptops = 'Laptops'
}

export enum FilterPrice {
  lessThan500 = 'Less than $500',
  from500to1000 = '$500 - $1000',
  from1000to2000 = '$1000 - $2000',
  up2000 = '$2000 & Up'
}
