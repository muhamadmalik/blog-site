'use client';
import { apiRouter, formatDate } from '@/lib/utils';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { useState } from 'react';
import { Comment, tag } from '@/app/types';

const ArticlePage = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const articleUrl = apiRouter(`/api/articles/${id}`);
  const commentsUrl = apiRouter(`/api/articles/${id}/comments`);

  // Fetch Article Data
  const fetchArticle = async () => {
    const { data } = await axios.get(articleUrl);
    return data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: [`article_${id}`],
    queryFn: fetchArticle,
  });

  const [commentText, setCommentText] = useState('');

  const addComment = async () => async (newComment: string) =>
    axios.post(commentsUrl, { text: newComment });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main key={`article_${id}`} className="max-w-3xl mx-auto px-6 py-12">
      <header className="flex justify-between text-gray-500 text-sm">
        <span>{formatDate(data.createdAt)}</span>
      </header>
      <h1 className="text-4xl font-bold mt-4 leading-tight">{data.title}</h1>
      <div className="mt-4 flex gap-3">
        {data.tags &&
          data?.tags.map((tag: tag) => (
            <div key={tag.name}>
              <span className="bg-orange-600 text-white text-sm px-3 py-1 rounded-md">
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

      {/* Comment Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold">Comments</h2>

        {/* Display Comments */}
        <div className="mt-4 space-y-4">
          {data.comments?.map((comment: Comment) => (
            <div key={comment.id} className="border-b border-gray-700 pb-2">
              <p className="text-gray-300">
                <span className="font-bold">{comment.author.name}</span> on{' '}
                {formatDate(comment.createdAt)}
              </p>
              <p className="italic text-gray-400">{comment.text}</p>
            </div>
          ))}
        </div>

        {/* Add Comment */}
        <div className="mt-6">
          <textarea
            className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600"
            rows={3}
            placeholder="Add a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          ></textarea>
          <button
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            // onClick={() => addComment.mutate(commentText)}
            disabled={isLoading}
          >
            {isLoading ? 'Adding...' : 'Add Comment'}
          </button>
        </div>
      </section>
    </main>
  );
};

export default ArticlePage;
