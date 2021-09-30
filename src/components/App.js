import React, {useEffect} from 'react';
import Router from "./Router";
import {onSilentRefresh} from '../auth';

function App() {
  useEffect(()=>{
    onSilentRefresh();
  }, [])

  return (
    <div className="App">
      <Router />
    </div>
  )
}

export default App;
