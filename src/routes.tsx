import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { URLs } from './__data__/urls';

import First from './pages/first'
import Transport from './pages/transport'
import Sport from './pages/sport'
import History from './pages/history';
import Education from './pages/education'
import Entrance from './pages/login/entrance';
import Registration from './pages/login/registration';

import { ErrorBoundary } from './components/error-boundary';
import Places from './pages/places';

export const PageRoutes = () => (
    <ErrorBoundary>
        <Routes>
            <Route path={URLs.baseUrl} element={<First />} />
            {URLs.ui.places && <Route path={URLs.ui.places} element={<Places />} />}
            {URLs.ui.transport && <Route path={URLs.ui.transport} element={<Transport />} />}
            {URLs.ui.sport && <Route path={URLs.ui.sport} element={<Sport />} />}
            {URLs.ui.history && <Route path={URLs.ui.history} element={<History />} />}
            {URLs.ui.education && <Route path={URLs.ui.education} element={<Education />} />}

            {URLs.ui.entrance && <Route path={URLs.ui.entrance} element={<Entrance />} />}
            {URLs.ui.registration && <Route path={URLs.ui.registration} element={<Registration />} />}

            {URLs.tripNumber.url && <Route path={URLs.tripNumber.url} element={<Transport />} />}

            <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
    </ErrorBoundary>
)
