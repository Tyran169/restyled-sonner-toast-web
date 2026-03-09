import Logo from './logo';
import { ThemeToggle } from './theme-toggle';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <>
      <header
        id="main-header"
        className="fixed top-0 left-0 right-0 z-50 border-b"
      >
        <div className="bg-background/80 backdrop-blur-md flex items-center justify-between px-4 py-3 sm:px-6 md:px-8">
          {/* Left: Logo and Title */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Logo
              width={32}
              height={32}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg select-none"
            />
            <h1 className="hidden sm:block text-lg sm:text-xl font-semibold tracking-tight">
              Restyled Sonner Toast
            </h1>
          </div>

          {/* Right: GitHub Button and Theme Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Button variant="outline" size="sm" asChild className="sm:px-3">
              <a
                href="https://github.com/Tyran169/restyled-sonner-toast-web"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sm:hidden">↗</span>
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>
      {/* Derived Header Height */}
      <div className="h-[var(--header-height)]" />
      <script
        dangerouslySetInnerHTML={{
          __html: derivedHeihtScript
        }}
      />
    </>
  );
}

const derivedHeihtScript = `
let mh = document.getElementById('main-header');
let hs = document.createElement('style');
document.head.appendChild(hs);
if (mh) {
  let uh = () => {
    hs.textContent = ':root{--header-height:' + mh.offsetHeight + 'px;}';
  };
  uh();
  window.addEventListener('resize', uh);
}
`;
