import logo from './logo.svg';
import './App.css';
import ShowList from './developerlist/showlist';
import Show from './fruits.jsx/show';

function App() {
  return (
    <div className="App">
      <h2>Task: filter the list items based on the salary and designation</h2>
      <ShowList/>
      <br></br>
      <h2>Task:take a list of objects contains fruits and vegetable, using conditional render show the list items</h2>
      <Show/>
     
    </div>
  );
}

export default App;
