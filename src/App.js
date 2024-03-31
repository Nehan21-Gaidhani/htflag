import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import CardComp from './Components/CardComp';
import Page from './page';

import pdf3 from './assests/logo512.png';//sample
import pdf1 from './assests/sample.py';//sample

function App() {
  return (
    
    <div className="App">
      <NavbarComp></NavbarComp>
     <Page></Page>
      </div>
  );
}

export default App;