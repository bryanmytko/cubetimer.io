import 'materialize-css/dist/css/materialize.min.css'

import { Footer, Header, Timer } from './components';

function App() {
  return (
    <>
    <Header />
      <main>
        <div className="main-container">
          <Timer />
        </div>
      </main>
    <Footer />
    </>
  );
}

export default App;
