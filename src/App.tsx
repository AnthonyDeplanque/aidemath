import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import NumberShow from './number';
import Question from './Question';

function App() {

  return (
    <>
      Aide aux multiplications
      <div style={{
        display: "flex",
        flexDirection: "row",
      }}>
        {Array.from(Array(10), (_, i) => i + 1).map((i) => {
          return <NumberShow multiplier={i} />;
        })}

      </div >
      <div style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-end"
      }}>

        <Question />
      </div>
    </>
  );
}

export default App;
