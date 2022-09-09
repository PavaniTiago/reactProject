import './App.css';
import Button from './Button';


function say(a, b){
    alert(a + b)
}
  

function App() {
  return (
    <div className="App">
      Hi
      <br></br>
      <Button onClick={() => say(10, 20)} name="Tiago"/>
    </div>
  );
}

export default App;
