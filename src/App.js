import 'materialize-css/dist/css/materialize.min.css'
import { Routes, Route } from 'react-router-dom';

import { Footer, Header, Statistics, Timer } from './components';

function App() {
  return (
    <>
    <Header />
      <main>
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Timer />} />
            <Route path="/statistics" element={<Statistics />} />
          </Routes>
        </div>
      </main>
    <Footer />
    </>
  );
}

export default App;
