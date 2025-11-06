import React from 'react';
import { useAuthStore } from './stores/auth.store';
import { Login } from './components/auth/login';
import { Dashboard } from './components/dashboard';

export default function App() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  return isAuthenticated ? <Dashboard /> : <Login />;
}