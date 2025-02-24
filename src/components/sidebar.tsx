'use client';
import { Search, Github, Mail, Shuffle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { apiRouter } from '@/lib/utils';
export const SideBar = () => {
  const tagUrl = apiRouter('/api/tags');
  const fetchTags = async () => {
    const { data } = await axios.get(tagUrl);
    return data;
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ['tags'],
    queryFn: fetchTags,
  });

  return (
    <>
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
          ) : data.length == 0 ? (
            <>No Tags</>
          ) : (
            <>
              <h2 className="text-2xl font-bold">All tags</h2>
              <div className="flex flex-wrap gap-2">
                {data.map((tag: string) => (
                  <span
                    key={tag}
                    className="bg-[#D84A05] px-3 py-1 rounded-full text-sm hover:bg-[#D84A05]/80 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button
                variant="ghost"
                className="w-full text-gray-400 hover:text-white mt-4"
              >
                <XCircle className="w-4 h-4 mr-2" />
                Clear filter
              </Button>
            </>
          )}
        </div>

        {/* Actions */}
        <div className="space-y-4">
          <Button variant="secondary" className="w-full justify-between">
            Random article
            <Shuffle className="w-4 h-4" />
          </Button>
          <Button variant="secondary" className="w-full justify-between">
            Theme: Default
          </Button>
          <div className="flex gap-2">
            <Button variant="secondary" className="flex-1">
              <Github className="w-4 h-4" />
            </Button>
            <Button variant="secondary" className="flex-1">
              <Mail className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};
