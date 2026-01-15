'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Check if user is logged in on load
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();
        if (data.success) {
            setUser(data.user);
            localStorage.setItem('user', JSON.stringify(data.user));
            return { success: true };
        } else {
            return { success: false, message: data.message };
        }
    };

    const signup = async (name, email, password) => {
        const res = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await res.json();
        if (data.success) {
            setUser(data.user);
            localStorage.setItem('user', JSON.stringify(data.user));
            return { success: true };
        } else {
            return { success: false, message: data.message };
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        // We would also call a logout API to clear cookies if needed
        router.push('/');
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
