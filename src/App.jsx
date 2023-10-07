import './App.css';
import Questions from './pages/Questions';
import Start from './pages/Start';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Start/>}></Route>
            <Route path='character-test' element={<Questions/>}></Route>
        </Routes>
    </BrowserRouter>

  );
}

export default App;
