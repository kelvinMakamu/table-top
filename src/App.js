import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import './App.css';

function App() {

  const chamas = useSelector(state=>state.chamas.chamas);

  return (
    <Fragment>
     
    </Fragment>
  );
}

export default App;
