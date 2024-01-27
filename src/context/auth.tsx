import React, { useEffect } from "react";
import { FC, createContext, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
//create context
interface AuthContextType{
    user : User | null,
    isLoading : boolean
}
export const AuthContext = createContext<AuthContextType>({
    user: null,
    isLoading : false,
});

interface AuthProviderProps{
    children: React.ReactElement;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    //check if user is logged in or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged( auth, (user) => {
            setUser(user);
            setIsLoading(false)
        });
        return unsubscribe;
    }, [])

    const value = {
        user,
        isLoading,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
