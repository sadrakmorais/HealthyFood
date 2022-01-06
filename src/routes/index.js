import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import SignUp from '../pages/signUp';
import LandingPage from '../pages/LandingPage';

const ApplicationRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/signup' element={<SignUp />} />
				<Route exact path='/' element={<Navigate to='home' />} />
				<Route exact path='/home' element={<LandingPage />} />
				<Route exact path='*' element={<h1>404</h1>} />
			</Routes>
		</BrowserRouter>
	);
};

export default ApplicationRoutes;
