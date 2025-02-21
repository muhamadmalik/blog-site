'use client'
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';
export const Header = () => {
    // const [activeTab, setActiveTab ] = useState()

//   const router = useRouter();
//   const navigateTo = (path: string) => {
//     router.push(path);
//   };
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
              <Link href="/all" className="hover:text-pink-500 border-b-2 border-pink-500">
                All Articles
              </Link>
              <Link href="/latest" className="hover:text-pink-500">
                Latest Articles
              </Link>
              <Link href="/about" className="hover:text-pink-500">
                About
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
