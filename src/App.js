import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import PaperBase from './components/PaperBase.jsx'
import SwaggerDocumentation from './components/SwaggerDocumentation.jsx';  
import Challenge from './components/Challenge.jsx';  

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tech-write-challenge" element={<PaperBase />} />
        <Route path="/docs" element={<SwaggerDocumentation />} />
        <Route path="/challenge" element={<Challenge />} />
      </Routes>
    </BrowserRouter>
  )
}
