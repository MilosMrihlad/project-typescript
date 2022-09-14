import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import SignUp from './components/Register';
import SignIn from './components/SingIn';


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Link to={'/prihlaseni'}>
                <button>Příhlásit se</button>
            </Link>
            <Routes>
                <Route path={'/prihlaseni'} element={<SignIn />} />
                <Route path={'/registrace'} element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
