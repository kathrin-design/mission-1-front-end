import { create } from 'zustand';

export const useLoginStore = create((set, get) => ({
    email: '',
    password: '',
    setEmail: (email) => set({ email }), 
    setPassword: (password) => set({ password }),
    login: () => {
        const { email, password } = get();
        const storedUser = localStorage.getItem('userData');
        if (storedUser) {
            const { email: storedEmail, password: storedPassword } = JSON.parse(storedUser);
            if (email === storedEmail && password === storedPassword) {
                localStorage.setItem('isLoggedIn', 'true');
                return true;
            }
        }
        return false;
    },
}));
