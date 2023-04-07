import '../styles/App.css';
import Form from './Form';

function App() {

  return (
    <div className="App">
      <div className="header">
        <h1>Coliseum</h1>
        <p>
          What are your odds of winning a fight against various groups of opponents?
        </p>
      </div>

      <Form></Form>
    </div>
  );
}

export default App;
