import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Section } from './components/Section';

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Section img="assets/img/01.jpg" />
      <Section img="assets/img/02.jpg"/>
      <Section img="assets/img/03.jpg"/>
      <Footer />
    </div>
  );
}

export default App;
