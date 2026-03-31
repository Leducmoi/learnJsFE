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
      <Section img="assets/img/01.jpg"
               title = "For those about to rock..."
               detail={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid,
                        mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem,
                        ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae 
                        obcaecati.`} />
      <Section img="assets/img/02.jpg" 
               title = "For those about to rock..."
               imagePosition="left"
               detail={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid,
                        mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem,
                        ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae 
                        obcaecati.`} />
      <Section img="assets/img/03.jpg"
               title = "For those about to rock..."
               detail={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid,
                        mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem,
                        ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae 
                        obcaecati.`}/>
      <Footer />
    </div>
  );
}

export default App;
