import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Browse from './routes/browse/browse.component';
import SignInPage from './routes/sign-in-page/sign-in-page.component';
import Checkout from './routes/checkout/checkout.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="browse" element={<Browse />} />
          <Route path="sign-in-page" element={<SignInPage />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
