import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setUser({ token });
        }
    }, []);

    const login = async (email, password) => {
        try {
            const res = await axios.post("http://127.0.0.1:5000/login", { email, password });
            localStorage.setItem("token", res.data.token);
            setUser({ token: res.data.token });
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
