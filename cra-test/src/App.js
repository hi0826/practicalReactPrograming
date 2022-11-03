import logo from './logo.svg';
import './App.css';
import './test.css';
import TodoList from './TodoList';

function App() {
  console.log(`REACT_APP_DATA_API = ${process.env.REACT_APP_DATA_API}`);
  console.log(`REACT_APP_LOGIN_API = ${process.env.REACT_APP_LOGIN_API}`);
  console.log(`REACT_APP_NODE_VERSION = ${process.env.REACT_APP_NODE_VERSION}`);
  console.log(`REACT_APP_TITLE = ${process.env.REACT_APP_TITLE}`);
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
