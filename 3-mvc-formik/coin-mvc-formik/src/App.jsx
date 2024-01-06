import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPageController from './controllers/LoginPageController';
import MainPageControlller from './controllers/MainPageControlller';
import HeaderView from './views/HeaderView';

function App() {
  return (
    <BrowserRouter>
      <HeaderView />
      <Routes>
        <Route path="/" element={<LoginPageController />} />
        <Route path="/home" element={<MainPageControlller />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
