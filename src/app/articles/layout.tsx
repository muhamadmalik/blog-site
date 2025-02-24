import { SideBar } from '@/components/sidebar';

export default function ArticlesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#001524] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-[1fr_300px] gap-8 ">
          <SideBar />
          {children}
        </div>
      </div>
    </div>
  );
}
