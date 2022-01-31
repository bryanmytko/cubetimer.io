import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css'

import {
  Footer,
  Header,
  Login,
  Profile,
  Statistics,
  Timer,
  Tutorials
} from './components';

function App() {
  return (
    <>
    <Header />
      <main>
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Timer />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </main>
    <Footer />
    </>
  );
}

export default App;
