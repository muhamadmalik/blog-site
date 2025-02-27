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
  name: string;
  articles: Article[];
  comments: Comment[];
};
export type Comment = {
  id: number;
  author: Author;
  title: string;
  text: string;
  authorId: number;
  createdAt: string;
  articleId: number;
};
