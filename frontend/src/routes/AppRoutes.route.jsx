import { Routes, Route } from 'react-router-dom';

import LoginComponent from '../components/auth/Login.component';
import LandingPage from '../pages/LandingPage';
import SignupPage from '../components/auth/Signup.component';
import Dashboard from '../pages/Dashboard.page';
import EventsListingPage from '../pages/Events.page';
import VerificationPage from '../pages/Verification.page';
import ResetPage from '../pages/ResetPage.page';
import ForgotPasswordPage from '../pages/Forgot.page';
import NotFoundPage from '../pages/PageNotFound.page';

function AppRoutes () {
  return (
    <Routes>
      <Route path='' index element={<LandingPage />} />
      <Route path='/auth/login' element={<LoginComponent />} />
      <Route path='/auth/forgot' element={<ForgotPasswordPage />} />
      <Route path='/auth/register' element={<SignupPage />} />
      <Route path='/auth/verify/:id' element={<VerificationPage />} />
      <Route path='/auth/reset/:id' element={<ResetPage />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/events' element={<EventsListingPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
