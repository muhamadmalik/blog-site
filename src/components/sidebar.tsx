'use client';
import { useState } from 'react';
import { Search, Github, Mail, Shuffle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { apiRouter } from '@/lib/utils';
import Link from 'next/link';

export const SideBar = () => {
  const tagUrl = apiRouter('/api/tags');
  const articlesUrl = apiRouter('/api/articles');

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const fetchTags = async () => {
    const { data } = await axios.get(tagUrl);
    return data;
  };

  const {
    data: tags,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['tags'],
    queryFn: fetchTags,
  });

  const fetchArticles = async () => {
    const { data } = await axios.get(articlesUrl, {
      params: { tags: selectedTags.join(',') },
    });
    return data;
  };

  const { data: articles, isLoading: loadingArticles } = useQuery({
    queryKey: ['articles', selectedTags],
    queryFn: fetchArticles,
    enabled: selectedTags.length > 0,
  });

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => setSelectedTags([]);

  return (
    <aside className="space-y-8 md:order-2">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Search</h2>
        <div className="relative">
          <Input
            type="search"
            placeholder="Search..."
            className="bg-white/5 border-0 focus-visible:ring-pink-500"
          />
          <Search
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
        </div>
      </div>

      <div className="space-y-4">
        {error ? (
          <>{error.message}</>
        ) : isLoading ? (
          <>Loading...</>
        ) : tags.length == 0 ? (
          <>No Tags</>
        ) : (
          <>
            <h2 className="text-2xl font-bold">All tags</h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag: { id: number; name: string }) => (
                <span
                  key={tag.id}
                  className={`px-3 py-1 rounded-full text-sm cursor-pointer ${
                    selectedTags.includes(tag.name)
                      ? 'bg-pink-500 text-white'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => toggleTag(tag.name)}
                >
                  {tag.name}
                </span>
              ))}
            </div>

            {selectedTags.length > 0 && (
              <Button
                variant="ghost"
                className="w-full text-gray-400 hover:text-white mt-4"
                onClick={clearFilters}
              >
                <XCircle className="w-4 h-4 mr-2" />
                Clear filter
              </Button>
            )}
          </>
        )}
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Articles</h2>
        {loadingArticles ? (
          <>Loading articles...</>
        ) : articles && articles.length > 0 ? (
          <ul className="space-y-2">
            {articles.map((article: { id: number; title: string }) => (
              <li key={article.id} className="border-b py-2">
                {article.title}
              </li>
            ))}
          </ul>
        ) : (
          <>No articles found</>
        )}
      </div>

      <div className="space-y-4">
        <Button variant="secondary" className="w-full justify-between">
          Random article
          <Shuffle className="w-4 h-4" />
        </Button>
        <Button variant="secondary" className="w-full justify-between">
          Theme: Default
        </Button>
        <div className="flex gap-2 w-full">
          <Link
            className="w-full"
            target="_blank"
            href={'https://github.com/muhamadmalik?tab=repositories'}
          >
            <Button variant="secondary" className="flex-1 w-full">
              <Github className="w-4 h-4" />
            </Button>
          </Link>
          <Link
            className="w-full"
            href="mailto:muhamadmalik.dev@gmail.com?subject=Hello&body=I want to contact you"
          >
            <Button variant="secondary" className="flex-1 w-full">
              <Mail className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </aside>
  );
};
