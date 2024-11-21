import { lazy, Suspense } from 'react';
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from '@/components/layout/Navbar';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';

// Lazy load non-critical sections
const Hero = lazy(() => import('@/components/sections/Hero'));
const About = lazy(() => import('@/components/sections/About'));
const Projects = lazy(() => import('@/components/sections/Projects'));
const Contact = lazy(() => import('@/components/sections/Contact'));

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        <Navbar />
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </Suspense>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
