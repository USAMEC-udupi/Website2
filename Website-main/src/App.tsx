import React, { useEffect } from 'react';
import InstitutionsRoulette from './components/InstitutionsRoulette';
import { institutions } from './data/institutions';

function App() {
  useEffect(() => {
    const mount = document.getElementById('institutions-roulette-root');
    if (mount) {
      // Dynamically render the roulette into the specific DOM node in index.html
      // We rely on ReactDOM from main.tsx root; here we just hydrate via a temporary root
      import('react-dom/client').then(({ createRoot }) => {
        try {
          createRoot(mount).render(<InstitutionsRoulette institutions={institutions} />);
        } catch {
          // ignore if already mounted
        }
      });
    }
  }, []);

  return null;
}

export default App;
