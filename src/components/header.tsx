'use client';
import Link from 'next/link';
import clsx from 'clsx';
import { useState } from 'react';
export const Header = () => {
  const [activeTab, setActiveTab] = useState('all');
  return (
    <>
      <header className="mb-12">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <h1 className="text-2xl font-bold">
              <span className="text-pink-500">./</span>david
              <span className="text-pink-500">/</span>blogs
            </h1>
            <div className="hidden md:flex gap-8">
              <Link
                href="/all"
                onClick={() => {
                  setActiveTab('all');
                }}
                className={clsx(
                  activeTab == 'all' ? 'border-b-2' : 'border-b-0',
                  'hover:text-pink-500  border-pink-500'
                )}
                // className="hover:text-pink-500 border-b-2 border-pink-500"
              >
                All Articles
              </Link>
              <Link
                href="/latest"
                onClick={() => {
                  setActiveTab('latest');
                }}
                className={clsx(
                  activeTab == 'latest' ? 'border-b-2' : 'border-b-0',
                  'hover:text-pink-500  border-pink-500'
                )}
              >
                Latest Articles
              </Link>
              <Link
                href="/about"
                onClick={() => {
                  setActiveTab('about');
                }}
                className={clsx(
                  activeTab == 'about' ? 'border-b-2' : 'border-b-0',
                  'hover:text-pink-500 border-pink-500'
                )}
              >
                About
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
