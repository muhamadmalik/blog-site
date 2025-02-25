import { Article } from '@/app/types';
import { formatDate, truncateText } from '@/lib/utils';
import { Button } from './ui/button';
import Link from 'next/link';
const ArticleCard = ({ articles }: { articles: Article[] }) => {
  return (
    <>
      <main className="grid gap-6 grid-cols-1 lg:grid-cols-2 auto-rows-min">
        {articles.map((article) => (
          <Link
            href={`/articles/${article.id}`}
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
                  <span>{article.comments.length}</span>
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
          </Link>
        ))}
      </main>
    </>
  );
};

export default ArticleCard;
