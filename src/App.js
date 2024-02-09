import logo from './logo.svg';
import './App.css';
import Header from './changingStage/Header';
import Main from './changingStage/Main';
import {useState} from "react"
import Footer from './changingStage/Footer';
function App() {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(0)
  return (
    <div className='counterParent'>
    <div className='dateCounter' >
    <Header count={count} setCount={setCount}/>
    <Main count2={count2} count={count} setCount2={setCount2}/>
    <Footer count2={count2}/>
    </div>
    </div>
  );
}

export default App;
