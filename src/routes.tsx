import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { URLs } from './__data__/urls';

import First from './pages/first'
import Transport from './pages/transport'
import Sport from './pages/sport'
import History from './pages/history';
import Education from './pages/education'
import Selector from './pages/selector'
import Profile from './pages/profile/profile';

import { ErrorBoundary } from './components/error-boundary';
import Places from './pages/places';
import Login from './pages/login/login';

export const PageRoutes = () => (
    <ErrorBoundary>
        <Routes>
            <Route path={URLs.baseUrl} element={<First />} />
            <Route path={URLs.ui.places} element={<Places />} />
            <Route path={URLs.ui.transport} element={<Transport />} />
            <Route path={URLs.ui.sport} element={<Sport />} />
            <Route path={URLs.ui.history} element={<History />} />
            <Route path={URLs.ui.education} element={<Education />} />
    
            
            <Route path={URLs.ui.selector} element={<Selector />} />


            <Route path={URLs.ui.profile.url} element={<Profile/>}/>
            <Route path={URLs.ui.entrance} element={<Login />} />
            <Route path={URLs.ui.registration} element={<Login />} />
            <Route path={URLs.ui.recover} element={<Login />} />

            <Route path={URLs.ui.tripNumber.url} element={<Transport />} />
            <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
    </ErrorBoundary>
)
