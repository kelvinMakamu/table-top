import React from 'react';
import { useSelector } from 'react-redux';
import Chamas from './components/Chamas/Chamas';
import Header from './components/Layout/Header';
import Wrapper from './components/Layout/Wrapper';

function App() {

  const chamas = useSelector(state=>state.chamas.chamas);
  
  return (
    <>
      <Header/>
      <Wrapper>
        <Chamas chamas={chamas}/>
      </Wrapper>
    </>
  );
}

export default App;