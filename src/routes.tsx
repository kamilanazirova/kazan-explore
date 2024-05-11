import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { URLs } from './__data__/urls';
import First from './pages/first'
import Transport from './pages/transport'
import Sport from './pages/sport'
import Education from './pages/education'

import ErrorBoundary from './components/error-boundary';

export const PageRoutes = () => (
    <ErrorBoundary>
        <Routes>
            <Route path={URLs.baseUrl} element={<First />} />
            {URLs.ui.places && <Route path={URLs.ui.places} element={<First />} />}
            {URLs.ui.transport && <Route path={URLs.ui.transport} element={<Transport />} />}
            {URLs.ui.sport && <Route path={URLs.ui.sport} element={<Sport />} />}
            {URLs.ui.history && <Route path={URLs.ui.history} element={<First />} />}
            {URLs.ui.education && <Route path={URLs.ui.education} element={<Education />} />}

            <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
    </ErrorBoundary>
)
