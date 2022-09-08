import './App.css';

  function saySmth(){
    return(
      <h2>
        My first time using React
      </h2>
    );
  }

function App() {
  return (
    <div className="App">
      {saySmth()}
    </div>
  );
}

export default App;
