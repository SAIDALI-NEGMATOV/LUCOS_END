
import './App.css';
import Contact from './Components/Contact/Contact';
import Content from './Components/Content/Content';
import Header from './Components/header/header';
import Mission from './Components/Mission/Mission';
import Nav from './Components/Nav/Nav';
import Our from './Components/Our/Our';
import Snig from './Components/snig/Snig';
import Test from './Components/Test/test';

function App() {
  return (
    <div className="container">
      <Nav/>
      <Header/>
      <Content/>
      <Mission/>
      <Our/>
      <Test/>
      <Snig/>
      <Contact/>
    </div>
  );
}

export default App;
