import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from './components/Register';
import SignIn from './components/SingIn';

const App: React.FC = () => {
    return (
        <Router>
            <SignIn />
            <Route path={'/registrace'} element={SignUp()} />
        </Router>
    );
};

export default App;
