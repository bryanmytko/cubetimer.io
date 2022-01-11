import 'materialize-css/dist/css/materialize.min.css'

import Header from './components/layout/header.component';
import Footer from './components/layout/footer.component';
import Logo from './components/layout/logo.component';
import Timer from './components/timer.component';

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
