import { Header } from '@/components/main-layout/header';

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      <Header />
      <div className="container mx-auto px-4 py-8">{/* Page content */}</div>
    </main>
  );
}
