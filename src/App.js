import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<SignIn />} />
          <Route path='create-account' element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <SignIn />
    // <SignUp />
  );
}

export default App;
