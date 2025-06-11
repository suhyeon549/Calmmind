import React from 'react';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import AnxietyPop from './Pages/AnxietyPop';
import NatureSound from './Pages/NatureSound';
import RoutinePicker from './Pages/RoutinePicker';
import Breathe from './Pages/Breathe';
import CheckIntroAndTest from './Pages/CheckIntroAndTest';
import DepressionTestPage from './Pages/DepressionTestPage';
import DepressionResultPage from './Pages/DepressionResultPage';
import AnxietyTestPage from './Pages/AnxietyTestPage';
import AnxietyResultPage from './Pages/AnxietyResultPage';
import CopyCalm from './Pages/CopyCalm';
import Footer from './Pages/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
            <Route path="/" element ={<Home/>}/>
            <Route path="/AnxietyPop" element ={<AnxietyPop/>}/>
            <Route path="/NatureSound" element ={<NatureSound/>}/>
            <Route path="/RoutinePicker" element ={<RoutinePicker/>}/>
            <Route path="/breathe" element={<Breathe />} />
            <Route path="/selfcheck" element={<CheckIntroAndTest />} />
            <Route path="/selfcheck/depression" element={<DepressionTestPage />} />
            <Route path="/selfcheck/depression/result" element={<DepressionResultPage />} />
            <Route path="/selfcheck/anxiety" element={<AnxietyTestPage />} />
            <Route path="/selfcheck/anxiety/result" element={<AnxietyResultPage />} />
            <Route path="/CopyCalm" element ={<CopyCalm/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;

