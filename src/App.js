import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import D2CPage from './pages/D2CPage';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <div className="App overflow-x-hidden relative min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<D2CPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster richColors position="top-center" />
    </div>
  );
}

export default App;
