import logo from './logo.svg';
import './App.css';
import Task14 from './components/Task14';
import DemoMap from './components/DemoMap';
import Uni from './components/Uni';
import College from './components/College';

function App() {
  var a = 10;
  var isActive = true;
  var user ={
    name:"vivek",
    age : 21
  }
  return (
    <div className="App">
        {/* <Task14/> */}
        {/* <DemoMap/> */}
        {/* <Uni/> */}
        <College/>
    </div>
  );
}

export default App;
