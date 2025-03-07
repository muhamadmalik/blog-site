export type Article = {
  id: number;
  title: string;
  text: string;
  comments: Comment[];
  author: Author
  authorId: number;
  createdAt: string;
  tags: tag[]
};
export type tag = {
  id: number,
  name: string
}

export type Author = {
  id: number;
  username: string;
  articles: Article[];
  comments: Comment[];
};
export type Comment = {
  id: number;
  username: string,
  title: string;
  text: string;
  createdAt: string;
  articleId: number;
};
