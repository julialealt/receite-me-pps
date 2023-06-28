import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, useState } from "react";
import RecentlyViewed from "../pages/Profile/RecentlyViewed";


interface AuthContextProps {
    data: {
        bio: string;
        name: string,
        email: string,
        password: string
    }
    signIn: (email: string, password: string) => Promise<boolean>,
    saveId: (id: number) => void
}
  
export const AuthContext = createContext<AuthContextProps>({
    signIn: async (email, password) => false,
    data: {
        name: "",
        bio: "",
        email: "",
        password: ""
    },
    saveId: async (id) => {}
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

      const saveId = async (id: number) => {
        try {
          const savedIds = await AsyncStorage.getItem("recentlyViewed");
          let ids = savedIds ? JSON.parse(savedIds) : [];
      
          if (!ids.includes(id)) {
            if (ids.length === 12) {
              ids.pop(); // Remover o último elemento do array
            }
          } else {
            const index = ids.indexOf(id);
            ids.splice(index, 1); // Remover o ID repetido do array
          }
      
          ids.unshift(id); // Adicionar o ID no início do array
      
          await AsyncStorage.setItem("recentlyViewed", JSON.stringify(ids));
          console.log('ID salvo com sucesso:', id);
          visualizarAsyncStorage();
        } catch (error) {
          console.log('Erro ao salvar o ID: ', error);
        }
      };

    const visualizarAsyncStorage = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const items = await AsyncStorage.multiGet(keys);
    
        // Exiba os dados armazenados
        items.forEach(([key, value]) => {
          console.log(`${key}: ${value}`);
        });
      } catch (error) {
        console.error('Erro ao visualizar o AsyncStorage:', error);
      }
    };
      

    return(
        <AuthContext.Provider value={{ data: formData, signIn, saveId  }} >
            {children}
        </AuthContext.Provider>
    )
}