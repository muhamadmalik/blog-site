'use client';
import { apiRouter } from '@/lib/utils';
import ArticleCard from '@/components/articleCard';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
export default function LatestBlogs() {
  const latestUrl = apiRouter('/api/articles/latest');
  const fetchLatestArticles = async () => {
    const { data } = await axios.get(latestUrl);
    return data;
  };
  const { data, error, isLoading } = useQuery({
    queryKey: ['latestArticles'],
    queryFn: fetchLatestArticles,
  });
  if (isLoading) return <p>loading</p>;
  if (error) return <>Error: {error.message}</>;
  return (
    <>{data.length > 0 ? <ArticleCard articles={data} /> : 'No Articles Found'}</>
  );
}

