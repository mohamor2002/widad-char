import './App.css';
import Questions from './pages/Questions';
import Start from './pages/Start';
import Results from './pages/Results'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [charArray,setCharArray]=useState([])
  const [completed,setCompleted]=useState(false)
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Start />}></Route>
            <Route path='character-test' element={<Questions setCompleted={setCompleted} charArray={charArray} setCharArray={setCharArray}/>}></Route>
            <Route path='results' element={<Results completed={completed} charArray={charArray}/>}></Route>
        </Routes>
    </BrowserRouter>

  );
}

export default App;
