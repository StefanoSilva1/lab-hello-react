import './App.css';
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import AwesomeButton from "./Components/AwesomeButton";
import Section from "./Components/Section";

function App() {
  return (
    <div className="App">
    <Navbar />
    <Main />
    <AwesomeButton/>
    <Section/>
    </div>
  );
}
export default App;
