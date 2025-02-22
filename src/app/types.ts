export type Article = {
  id: number
  title: string
  text: string
  comments: Comment[]
  authorId: number
  createdAt: string
}


export type Comment = {
  id: number,
  title: string,
  text: string,
  authorId: number,
  createdAt: string,
  articleId: number
}