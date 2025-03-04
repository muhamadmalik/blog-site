'use client';
import { apiRouter } from '@/lib/utils';
import ArticleCard from '@/components/articleCard';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useTagStore } from '@/app/tabStore';
import { Article } from '@/app/types';

export default function BlogPage() {
  const { activeTags } = useTagStore();

  const articlesUrl = apiRouter('/api/articles/all');

  const fetchArticles = async () => {
    const { data } = await axios.get<Article[]>(articlesUrl);

    if (activeTags.length === 0) return data;

    return data.filter((article) =>
      article.tags.some((tag) => activeTags.includes(tag.name))
    );
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ['articles', activeTags],
    queryFn: fetchArticles,
  });
  console.log(data)
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {data && data.length > 0 ? (
        <ArticleCard articles={data} />
      ) : (
        'No Articles Found'
      )}
    </>
  );
}
