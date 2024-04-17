export interface INavbarItem {
  label: string;
  link: string;
}

export interface IMainNews {
  date: string;
  category: string;
  heading: string;
  description: string;
  imageUrl: string;
}

export interface IOtherNews {
  date: string;
  category: string;
  description: string;
  imageUrl: string;
  height: string;
}

export interface IAllNews {
  time: string;
  date: string;
  description: string;
}

export interface IPopularNews {
  imageUrl: string;
  description: string;
}

export interface IKnownFacts {
  imageUrl: string;
  description: string;
}
