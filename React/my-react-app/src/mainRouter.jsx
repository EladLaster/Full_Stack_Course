import { Routes, Route, Link } from 'react-router-dom';
import App from './App.jsx';
import App2 from './App2.jsx';
import App3 from './App3.jsx';
import App4 from './App4.jsx';
import App5 from './App5.jsx';
import App6 from './App6.jsx';

export default function MainRouter() {
  return (
    <>
      <nav>
        <Link to="/">Intro & JSX</Link> |{' '}
        <Link to="/props">Props</Link> |{' '}
        <Link to="/states">States</Link> |{' '}
        <Link to="/inputs">Inputs</Link> |{' '}
        <Link to="/dataflow">DataFlow</Link> |{' '}
        <Link to="/effects">Effects</Link>
      </nav>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/props" element={<App2 />} />
        <Route path="/states" element={<App3 />} />
        <Route path="/inputs" element={<App4 />} />
        <Route path="/dataflow" element={<App5 />} />
        <Route path="/effects" element={<App6 />} />
      </Routes>
    </>
  );
}
