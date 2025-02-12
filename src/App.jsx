import { lazy, Suspense, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './App.css';
import LandingPage3 from './components/LandingPage3';
import LandingPage6 from './components/LandingPage6';
// Lazy load Project1 and LandingPage6
const LazyProject1 = lazy(() => import('./components/Project1'));


function LazyLoadComponent({ Component }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isVisible, setIsVisible] = useState(false);

  if (inView && !isVisible) {
    setIsVisible(true);
  }

  return (
    <div ref={ref}>
      {isVisible ? (
        <Suspense >
          <Component />
        </Suspense>
      ) : (
        <div style={{ minHeight: '100vh' }} /> // Placeholder space
      )}
    </div>
  );
}

function App() {
  return (
    <>
      <LandingPage3 />

      <LazyLoadComponent Component={LazyProject1} />
      <LandingPage6 />
    </>
  );
}

export default App;
