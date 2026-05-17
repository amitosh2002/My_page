'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { hashPassword, verifyPassword } from '@/lib/crypto';
import { getAdminPasswordHash, setAdminPasswordHash } from '@/lib/data-storage';
import { Lock } from 'lucide-react';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSettingUp] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !getAdminPasswordHash();
  });
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (isSettingUp) {
      // First time setup - set password
      if (password.length < 6) {
        setError('Password must be at least 6 characters long');
        return;
      }
      const hash = hashPassword(password);
      setAdminPasswordHash(hash);
      localStorage.setItem('admin_authenticated', 'true');
      router.push('/admin/dashboard');
    } else {
      // Login
      const storedHash = getAdminPasswordHash();
      if (!storedHash) {
        setError('Admin password not set. Please refresh the page.');
        return;
      }
      if (verifyPassword(password, storedHash)) {
        localStorage.setItem('admin_authenticated', 'true');
        router.push('/admin/dashboard');
      } else {
        setError('Incorrect password');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
            <Lock className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {isSettingUp ? 'Set Admin Password' : 'Admin Login'}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {isSettingUp
              ? 'Create a password to access the admin dashboard'
              : 'Enter your password to continue'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter password"
              required
            />
          </div>

          {error && (
            <div className="p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            {isSettingUp ? 'Set Password' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}

