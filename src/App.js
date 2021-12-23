import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';

function App() {
  return (
    <div className="App">
      <Navbar title="Text Utilities" />
      <div className="container">
        <Textbox />
      </div>
    </div>
  );
}

export default App;
