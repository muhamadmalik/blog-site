'use client';
import { Button } from '@/components/ui/button';
import { formatDate, truncateText } from '@/lib/utils';
import type { Article } from '@/app/types';
import { apiRouter } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function BlogPage() {
  const latestUrl = apiRouter('api/articles/latest');
  console.log(latestUrl);
  // const articles = await getArticles()
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(latestUrl);
        console.log(response);
        if (!response.ok) throw new Error('Failed to fetch articles.');
        const result = await response.json();
        setArticles(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchArticles();
  }, []);
  return (
    <main className="grid gap-6 md:grid-cols-2 auto-rows-min">
      {articles.map((article) => (
        <article
          key={article.id}
          className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors"
        >
          <div className="space-y-4">
            <div className="text-sm text-gray-400">
              {formatDate(article.createdAt)}
            </div>
            <h2 className="text-xl font-bold">{article.title}</h2>
            <p className="text-gray-400">{truncateText(article.text)}</p>
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-2">
                <span>0</span>
                <span className="text-gray-400">comments</span>
              </div>
              <Button
                variant="link"
                className="text-pink-500 hover:text-pink-400"
              >
                Read more →
              </Button>
            </div>
          </div>
        </article>
      ))}
    </main>
  );
}

