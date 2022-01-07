import './App.css';
import 'materialize-css/dist/css/materialize.min.css'

import Header from './components/layout/header.component';
import Footer from './components/layout/footer.component';
import Scramble from './components/scramble.component';

function App() {
  return (
    <>
    <Header />
      <main className="grey lighten-2">
        <div className="App">
          <h1>Cubetimer.io</h1>
          <Scramble />
        </div>
      </main>
    <Footer />
    </>
  );
}

export default App;