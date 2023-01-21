import logo from './logo.svg';
import './App.css';
// import './YS/task.css'
import Ccontent from './YS/Ccontent';
import Mycontext from './YS/Mycontext';

function App() {
  return (
    <div className="App">
      <Mycontext>
        <Ccontent/>
      </Mycontext>
    </div>
  );
}

export default App;
