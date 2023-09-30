import './App.css';
import Highlight from './components/highlightText/HighlightText';
import Button from './components/button/Button';

function App() {
  return (
    <div className="App">
      <Highlight upperText='uppercase' color='red'/>
      <Button label='Baixar CV'/>
    </div>
  );
}

export default App;
