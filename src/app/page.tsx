import { Button } from '@/components/ui/button';
import './globals.css';

export default function BlogPage() {
  return (
    <>
      <main className="grid gap-6 md:grid-cols-2 auto-rows-min md:order-1">
        <article className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
          <div className="space-y-4">
            <div className="text-sm text-gray-400">Monday, 06. March 2023</div>
            <h2 className="text-xl font-bold">
              Time-Saving Shortcuts and Features in Visual Studio Code: Emmet
            </h2>
            <p className="text-gray-400">
              The Emmet tool in Visual Studio Code is great feature that helps
              you speed up writing HTML. In Visua...
            </p>
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-2">
                <span>20</span>
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

        <article className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
          <div className="space-y-4">
            <div className="text-sm text-gray-400">
              Sunday, 26. February 2023
            </div>
            <h2 className="text-xl font-bold">
              map() vs. forEach() in JavaScript
            </h2>
            <p className="text-gray-400">
              When learning the ins and outs of JavaScript, you may have come
              across the map() and forEach() metho...
            </p>
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-2">
                <span>10</span>
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
      </main>
    </>
  );
}

