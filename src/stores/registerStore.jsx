import { create } from 'zustand';

export const useRegisterStore = create((set) => ({
    fullName: '',
    email: '',
    gender: '',
    phoneNumber: '',
    password: '',
    setFullName: (fullName) => set(() => ({ fullName })), // Pass fullName as a parameter
    setEmail: (email) => set(() => ({ email })), // Pass email as a parameter
    setGender: (gender) => set(() => ({ gender })), // Pass gender as a parameter
    setPhoneNumber: (phoneNumber) => set(() => ({ phoneNumber })), // Pass phoneNumber as a parameter
    setPassword: (password) => set(() => ({ password })), // Pass password as a parameter
    saveToLocalStorage: () => {
        set((state) => {
            const userData = {
                fullName: state.fullName,
                email: state.email,
                gender: state.gender,
                phoneNumber: state.phoneNumber,
                password: state.password,
            };
            localStorage.setItem('userData', JSON.stringify(userData));
            return state;
        });
    },
}));
