import logo from './logo.svg';
import './App.css';
import Button from './Button1';
import Button2 from './Button2';
import Button3 from './Button3';
import Box1 from './Box1';
import Box2 from './Box2';
import Box3 from './Box3';

function App() {
  return (
    <div>
      <Button size="big" />
      <Button size="small" />
      <Box1 size="big" />
      <Box1 size="small" />
      <Button2 size="big" />
      <Button2 size="small" />
      <Box2 size="big" />
      <Box2 size="small" />
      <Button3 size="big" />
      <Button3 size="small" />
      <Box3 size="big" />
      <Box3 size="small" />
    </div>
  );
}

export default App;
