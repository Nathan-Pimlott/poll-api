export interface IUnformattedPolls {
  [key: string]: {
    id: string;
    title: string;
    status: string;
    createdDate: string;
    optionId: string;
    optionTitle: string;
  }[];
}

export interface IPoll {
  id: string;
  title: string;
  status: string;
  createdDate: string;
  options?: IPollOption[];
}

export interface IPollOption {
  id: string;
  title: string;
  pollId: string;
}
