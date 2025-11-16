
import React, { useContext } from 'react';
import { AppContext } from './store/AppContext';
import AuthPage from './pages/AuthPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import AffiliateDashboard from './pages/affiliate/AffiliateDashboard';
import { Role } from './types';

const App: React.FC = () => {
  const { state } = useContext(AppContext);
  const { currentUser } = state;

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {!currentUser ? (
        <AuthPage />
      ) : currentUser.role === Role.ADMIN ? (
        <AdminDashboard />
      ) : (
        <AffiliateDashboard />
      )}
    </div>
  );
};

export default App;
