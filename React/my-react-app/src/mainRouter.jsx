import { Routes, Route, NavLink } from 'react-router-dom';
import App from './App.jsx';
import App2 from './App2.jsx';
import App3 from './App3.jsx';
import App4 from './App4.jsx';
import App5 from './App5.jsx';
import App6 from './App6.jsx';
import App7 from './App7.jsx';

export default function MainRouter() {
  return (
    <>
      <nav>
        <NavLink to="/">Intro & JSX</NavLink> |{' '}
        <NavLink to="/props">Props</NavLink> |{' '}
        <NavLink to="/states">States</NavLink> |{' '}
        <NavLink to="/inputs">Inputs</NavLink> |{' '}
        <NavLink to="/dataflow">DataFlow</NavLink> |{' '}
        <NavLink to="/effects">Effects</NavLink> |{' '}
        <NavLink to="/context&reducer">Context & Reducer</NavLink> |{' '}
      </nav>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/props" element={<App2 />} />
        <Route path="/states" element={<App3 />} />
        <Route path="/inputs" element={<App4 />} />
        <Route path="/dataflow" element={<App5 />} />
        <Route path="/effects" element={<App6 />} />
        <Route path="/context&reducer" element = {<App7/>} />
      </Routes>
    </>
  );
}
