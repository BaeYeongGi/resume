export interface sectionType {
  content: string;
  data?: projectDataType[];
  viewProjectImage?: React.MouseEventHandler<HTMLButtonElement> | any;
}


export interface projectDataType {
  id: number;
  since: string;
  title: string;
  list: Array<string>;
  img?: string;
}

export interface imgType {
  content: string;
  closeImg: React.MouseEventHandler<HTMLDivElement>;
  data?: projectDataType[];
}