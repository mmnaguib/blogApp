export interface postInterface {
  _id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  likes: number[];
  createdAt: string;
  user: {
    username: string;
    image: string;
  };
}

export interface categoryInterface {
  _id: number;
  title: string;
}
