import HeadlessSonnerBtn from '@/components/HeadlessSonnerBtn';
import { Header } from '@/components/main-layout/header';
import PromiseSonnerBtn from '@/components/PromiseSonnerBtn';
import SonnerVariants from '@/components/SonnerVariant';
import { Separator } from '@/components/ui/separator';

function Title({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-6 scroll-m-20 text-lg font-bold tracking-tight">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="p-8">
          <Title>Default Style</Title>
          <SonnerVariants />
          <Separator className="my-4 w-full" />
          <Title>Rich Colors Style</Title>
          <SonnerVariants richColors />
          <Separator className="my-4 w-full" />
          <Title>Inverted Colors Style</Title>
          <SonnerVariants invertColors />
          <Separator className="my-4 w-full" />
          <Title>Inverted Colors + Rich Colors Style</Title>
          <SonnerVariants richColors invertColors />
          <Separator className="my-4 w-full" />
          <Title>Promise Toast</Title>
          <PromiseSonnerBtn />
          <Separator className="my-4 w-full" />
          <Title>Headless Toast</Title>
          <HeadlessSonnerBtn />
        </div>
      </div>
    </div>
  );
}
