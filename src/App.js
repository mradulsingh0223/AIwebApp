
import './App.css';
import Mainscreen from './components/MainScreen';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="sidebar-content">
         <Sidebar />
        </div>
        <div className="mainscreen">
          < Mainscreen />
        </div>
      </div>
    </div>
  );
}

export default App;
