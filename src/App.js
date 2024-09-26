import './App.css';
import Main from './components/MainComponent'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Main/>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
