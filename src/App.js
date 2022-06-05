import './App.css';
import Drinks from './components/drinks';
import Fooditems from './components/fooditems';

function App() {
  return (
    <div >
      <h1 className='App'>Restaurant</h1>
      <h2 className='App'>Main course</h2>
      <Fooditems></Fooditems>
      <h3 className='App'>Drinks</h3>
      <Drinks></Drinks>
    </div>
  );
}

export default App;
