'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();
  const navItems = [
    { name: 'All Articles', path: '/articles/all' },
    { name: 'Latest Articles', path: '/articles/latest' },
    { name: 'About', path: '/about' },
  ]
  return (
    <header className="mb-12">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-52 w-full">
          <h1 className="text-2xl font-bold">
            <span className="text-pink-500">./</span>malik
            <span className="text-pink-500">/</span>blogs
          </h1>
          <div className="hidden md:flex gap-12">
            {navItems.map(({ name, path }) => (
              <Link
                key={path}
                href={path}
                className={clsx(
                  pathname === path ? 'border-b-2 text-pink-500' : 'border-b-0',
                  'hover:text-pink-500 border-pink-500'
                )}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};
