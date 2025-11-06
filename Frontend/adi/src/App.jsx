import './App.css'
import Card from './component/Card';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <Navbar />
      <br />
      <Card />
      <br />
      <Card />
      <br />
      <Card />
    </div>
  )
}

export default App