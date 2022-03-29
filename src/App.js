import Header from './components/header';
import MainMenu from './components/menu';
import MainWindow from './components/main';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content">
        <MainMenu/>
        <MainWindow/>
      </div>
      
    </div>
  );
}

export default App;
