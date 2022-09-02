import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          {/* <Route path="browse" element={<Browse />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="checkout" element={<CheckOut />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
