import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import SignIn from './components/SingIn';

const App: React.FC = () => {
    return (
        <Router>
            <SignIn />
        </Router>
    );
};

export default App;
