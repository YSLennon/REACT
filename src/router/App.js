import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from '../login/App';
import MUI from '../mui/App';
import UseEffect from '../useEffect/App';

const App = () => {
    return (
        <Router>
            <div>
                <ul>
                <li><Link to="/useEffect" >UseEffectComponent </Link> </li>
                <li><Link to="/login" >Login </Link> </li>
                <li><Link to="/" >Home </Link> </li>
                </ul>
            </div>
            
            <Routes>
                <Route path="/" element={<MUI />} />
                <Route path="/useEffect" element={<UseEffect />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;