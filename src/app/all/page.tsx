'use client';
import type { Article } from '@/app/types';
import { apiRouter } from '@/lib/utils';
import { useEffect, useState } from 'react';
import ArticleCard from '@/components/articleCard';

export default function BlogPage() {
  const latestUrl = apiRouter('/api/articles/all');
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(latestUrl);
        if (!response.ok) throw new Error('Failed to fetch articles.');
        const result = await response.json();
        setArticles(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchArticles();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {articles.length > 0 ? <ArticleCard articles={articles} /> : 'Loading...'}
    </>
  );
}