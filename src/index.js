import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import SectionOperation from './composants/SectionOperation';
import SectionProportion from './composants/SectionProportion';
import SectionTache from './composants/SectionTache';
import { TacheProvider } from './utils/context/tacheContext';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { UserProvider } from './utils/context/userContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <TacheProvider>
        <UserProvider>
          <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/inscription' element={<SignUp />} />
            <Route path='/acceuil' element={<App />}>
              <Route path='/acceuil/operation' element={<SectionOperation />} />
              <Route path='/acceuil/proportion' element={<SectionProportion />} />
              <Route path='/acceuil/tache' element={<SectionTache />} />
            </Route>
          </Routes>
        </UserProvider>
      </TacheProvider>
    </Router>
  </React.StrictMode>
);

