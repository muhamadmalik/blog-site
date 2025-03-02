'use client';
import { apiRouter, formatDate } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { tag } from '@/app/types';

const ArticlePage = () => {
  const { id } = useParams();
  const articleUrl = apiRouter(`/api/articles/${id}`);
  const fetchArticle = async () => {
    const { data } = await axios.get(articleUrl);
    return data;
  };
  const { data, isLoading, error } = useQuery({
    queryKey: [`article_${id}`],
    queryFn: fetchArticle,
  });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <main key={`article_${id}`} className="max-w-3xl mx-auto px-6 py-12">
      <header className="flex justify-between text-gray-500 text-sm">
        <span>{formatDate('2023-02-26')}</span>
      </header>
      <h1 className="text-4xl font-bold mt-4 leading-tight">{data.title}</h1>
      <div className="mt-4 flex gap-3">
        {data.tags &&
          data?.tags.map((tag: tag) => (
            <div key={tag.name}>
              <span  className="bg-orange-600 text-white text-sm px-3 py-1 rounded-md">
                {tag.name}
              </span>
            </div>
          ))}
      </div>
      <div className="flex items-center gap-2 text-gray-500 text-sm mt-4">
        <span className="text-lg">⏳</span>
        <span>4 min</span>
      </div>
      <article className="mt-6 space-y-4 text-lg text-gray-200">
        <p>{data.text}</p>
      </article>
    </main>
  );
};

export default ArticlePage;
