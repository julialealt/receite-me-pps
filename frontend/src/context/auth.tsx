import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { createContext, ReactNode, useState } from "react";

interface AuthContextProps {
    data: {
        bio: string;
        name: string,
        email: string,
        password: string
    }
    signIn: (email: string, password: string) => Promise<boolean>;
}
  
export const AuthContext = createContext<AuthContextProps>({
    signIn: async (email, password) => false,
    data: {
        name: "",
        bio: "",
        email: "",
        password: ""
    }
});

interface AuthProviderProps {
    children: ReactNode;
}

interface FormData {
    email: string;
    password: string;
}

interface UserFormData extends FormData {
    nome: string;
    id: number;
    bio: string;
  }

export default function AuthProvider({children}: AuthProviderProps) {
    const [formData, setFormData] = useState({
        name: "",
        bio: "",
        email: "",
        password: ""
    })

    const signIn = async (email: string, password: string) => {
        try {
          const response = await axios.get<UserFormData[]>("https://json-test-phi.vercel.app/users");
          const users = response.data;
          const findUserInAccount = users.find(
            (item: UserFormData) => item.email === email && item.password === password
          );
          if (findUserInAccount) {
            setFormData({
              name: findUserInAccount.nome,
              bio: "",
              email: email,
              password: password,
            });
          }
          return !!findUserInAccount;
        } catch (error) {
          console.error("Error retrieving user data:", error);
          return false;
        }
      };

    return(
        <AuthContext.Provider value={{ data: formData, signIn }} >
            {children}
        </AuthContext.Provider>
    )
}