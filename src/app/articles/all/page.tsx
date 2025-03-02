'use client';
import { apiRouter } from '@/lib/utils';
import ArticleCard from '@/components/articleCard';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function BlogPage() {
  const articlesUrl = apiRouter('/api/articles/all');
  const fetchArticles = async () => {
    const { data } = await axios.get(articlesUrl);
    return data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ['articles'],
    queryFn: fetchArticles,
  });
  if (isLoading) return <p>Loading</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>{data.length > 0 ? <ArticleCard articles={data} /> : 'No Articles Found'}</>
  );
}
