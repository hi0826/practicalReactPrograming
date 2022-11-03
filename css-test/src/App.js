import logo from './logo.svg';
import './App.css';
import Button from './Button1';
import Button2 from './Button2';
import Box from './Box1';

function App() {
  return (
    <div>
      <Button size="big" />
      <Button size="small" />
      <Box size="big" />
      <Box size="small" />
      <Button2 size="big" />
      <Button2 size="small" />
    </div>
  );
}

export default App;
