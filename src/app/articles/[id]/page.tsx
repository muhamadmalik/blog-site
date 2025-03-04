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
  const commentsUrl = apiRouter(`/api/articles/${id}/comment`);

  const fetchArticle = async () => {
    const { data } = await axios.get(articleUrl);
    return data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: [`article_${id}`],
    queryFn: fetchArticle,
  });

  const [showCommentBox, setShowCommentBox] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [name, setName] = useState('');

  const addComment = async () => {
    if (!name.trim()) {
      alert('Please enter your name.');
      return;
    }
    if (!commentText.trim()) {
      alert('Please enter a comment.');
      return;
    }

    try {
      await axios.post(commentsUrl, {
        username: name,
        text: commentText,
        articleId: id,
      });

      queryClient.invalidateQueries({ queryKey: [`article_${id}`] });

      setCommentText('');
      setName('');
      setShowCommentBox(false);
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main key={`article_${id}`} className="max-w-3xl ">
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

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Comments</h2>

        <div className="mt-4 space-y-4">
          {data.comments?.map((comment: Comment) => (
            <div key={comment.id} className="border-b border-gray-700 pb-2">
              <p className="text-gray-300">
                <span className="font-bold">{comment.username}</span> on{' '}
                {formatDate(comment.createdAt)}
              </p>
              <p className="italic text-gray-400">{comment.text}</p>
            </div>
          ))}
        </div>

        {!showCommentBox && (
          <button
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            onClick={() => setShowCommentBox(true)}
          >
            Add Comment
          </button>
        )}

        {showCommentBox && (
          <div className="mt-6">
            <input
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 mb-2"
              placeholder="Your Name (Required)"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600"
              rows={3}
              placeholder="Add a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            ></textarea>
            <div className="flex gap-2 mt-2">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={addComment}
              >
                Submit
              </button>
              <button
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                onClick={() => setShowCommentBox(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default ArticlePage;
