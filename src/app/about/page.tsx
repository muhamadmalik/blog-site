import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="flex justify-center py-12 px-4 bg-white/5">
      <div className=" w-full p-8 rounded-lg shadow-lg">
        <article className="text-gray-400">
          <h1 className="text-3xl font-bold text-white border-b border-gray-700 pb-4 mb-6">
            About Me
          </h1>

          <p className="text-lg">
            Hi, I&apos;m{' '}
            <span className="font-semibold text-white">Muhamad Malik</span>, a
            self-taught web developer with a passion for building modern,
            user-friendly applications. I love learning new technologies and
            sharing my experiences with others.
          </p>

          <p className="mt-4">
            I specialize in full-stack web development, primarily using
            <span className="font-semibold text-white">
              {' '}
              Next.js, TypeScript, and Tailwind CSS
            </span>
            on the frontend, along with Node.js and Express for backend
            development.
          </p>

          <p className="mt-4">
            Over time, I have worked on several projects, including freelance
            work and personal projects that have helped me refine my skills. I
            enjoy solving complex problems and optimizing performance for better
            user experience.
          </p>

          <p className="mt-4">
            Aside from coding, I love watching movies, anime, and reading manga
            and manhwas. These hobbies keep me inspired and give me fresh
            perspectives on creativity.
          </p>

          <p className="mt-4">
            If you’re interested in checking out my work, you can find the
            source code for my projects on GitHub:
          </p>

          <ul className="mt-4 space-y-2">
            <li>
              <Link
                target="_blank"
                href="https://github.com/muhamadmalik/blog-site.git"
                className="text-blue-400 hover:underline"
              >
                Blog-Site
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://github.com/muhamadmalik/blog-rest-api.git"
                className="text-blue-400 hover:underline"
              >
                Blog-Rest-API
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="/blog-content-management-system"
                className="text-blue-400 hover:underline"
              >
                Blog-Content-Management-System
              </Link>
            </li>
          </ul>

          <div className="mt-8">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-gray-300"
              asChild
            >
              <Link href="/">
                <ArrowLeft className="w-4 h-4" />
                go back
              </Link>
            </Button>
          </div>
        </article>
      </div>
    </div>
  );
}

