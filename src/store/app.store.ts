import { create } from 'zustand';

interface AuthState {
  apiKey: string | null;
  login: (key: string) => void;
  logout: (navigate: any) => void;
}

export const useAppStore = create<AuthState>((set) => ({
  apiKey: localStorage.getItem('apiKey'),
  login: (key) => {
    console.log("login",key)
    localStorage.setItem('apiKey', key);
    set({ apiKey: key });
  },
  logout: (navigate) => {
    console.log("logout")
    localStorage.removeItem('apiKey');
    set({ apiKey: null });
    navigate("/login");
  },
}));
