import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Chamas from './components/Chamas/Chamas';
import Card from './components/UI/Card';

function App() {

  const chamas = useSelector(state=>state.chamas.chamas);

  return (
    <Card>
      <Chamas chamas={chamas}/>
    </Card>
  );
}

export default App;