import { Search, Github, Mail, Shuffle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#001524] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-12">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-12">
              <h1 className="text-2xl font-bold">
                <span className="text-pink-500">.</span>code
                <span className="text-pink-500">/</span>blog
              </h1>
              <div className="hidden md:flex gap-8">
                <a href="#" className="border-b-2 border-pink-500">
                  All Articles
                </a>
                <a href="#" className="hover:text-pink-500">
                  Latest Articles
                </a>
                <a href="#" className="hover:text-pink-500">
                  About
                </a>
              </div>
            </div>
          </nav>
        </header>

        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          {/* Main Content */}
          <main className="grid gap-6 md:grid-cols-2 auto-rows-min">
            {/* Featured Article */}
            <article className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
              <div className="space-y-4">
                <div className="text-sm text-gray-400">Monday, 06. March 2023</div>
                <h2 className="text-xl font-bold">Time-Saving Shortcuts and Features in Visual Studio Code: Emmet</h2>
                <p className="text-gray-400">
                  The Emmet tool in Visual Studio Code is great feature that helps you speed up writing HTML. In
                  Visua...
                </p>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2">
                    <span>20</span>
                    <span className="text-gray-400">comments</span>
                  </div>
                  <Button variant="link" className="text-pink-500 hover:text-pink-400">
                    Read more →
                  </Button>
                </div>
              </div>
            </article>

            {/* Additional Articles */}
            <article className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
              <div className="space-y-4">
                <div className="text-sm text-gray-400">Sunday, 26. February 2023</div>
                <h2 className="text-xl font-bold">map() vs. forEach() in JavaScript</h2>
                <p className="text-gray-400">
                  When learning the ins and outs of JavaScript, you may have come across the map() and forEach()
                  metho...
                </p>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2">
                    <span>10</span>
                    <span className="text-gray-400">comments</span>
                  </div>
                  <Button variant="link" className="text-pink-500 hover:text-pink-400">
                    Read more →
                  </Button>
                </div>
              </div>
            </article>
          </main>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Search */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Search</h2>
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="bg-white/5 border-0 focus-visible:ring-pink-500"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>

            {/* Tags */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">All tags</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "TypeScript",
                  "React",
                  "AI",
                  "MongoDB",
                  "Mindset",
                  "Node.js",
                  "Vite",
                  "Express",
                  "Git",
                  "Visual Studio Code",
                  "Tools",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#D84A05] px-3 py-1 rounded-full text-sm hover:bg-[#D84A05]/80 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button variant="ghost" className="w-full text-gray-400 hover:text-white mt-4">
                <XCircle className="w-4 h-4 mr-2" />
                Clear filter
              </Button>
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
        </div>
      </div>
    </div>
  )
}

