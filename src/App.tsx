import { Suspense } from 'react';
import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoadingScreen } from '@/components/shared/LoadingScreen'
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ajay-ui-theme">
      <BrowserRouter basename={'/portfolio'}>
        <div className="bg-white dark:bg-gray-900 min-h-screen font-sans">
          <main>
            <Suspense fallback={<LoadingScreen />}>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
