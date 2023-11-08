import './App.css';
import Information from './components/Information/Information';
import Personal from './components/Personal/Personal';

function App() {
  return (
    <>
      <div className="container">
        <Information/>
        <Personal/>
      </div>
    </>
  )
}

export default App;