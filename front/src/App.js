import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { BoardSection, Login, Navbar } from './components';
import SignUp from "./components/Signup/Signup";
import Snake from "./components/Snake/Snake";
import { SignedProvider } from "./components/context/Signed.jsx";

function App() {
  return (
    <SignedProvider>
      <Router>
        <Routes>
          <Route path='/snake' element={<Snake />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </SignedProvider>
  );
}

export default App;
