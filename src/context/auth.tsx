import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, useEffect, useState } from "react";
import RecentlyViewed from "../pages/Profile/RecentlyViewed";
import { apiURL } from "../../api";


interface AuthContextProps {
  data: {
    id: number
    bio: string;
    nome: string,
    email: string,
    senha: string
  }
  signIn: (email: string, password: string) => Promise<boolean>,
  saveId: (id: number) => void,
  clearFormData: () => void,
  setNewFormData: (id: number, nome: string, bio: string, email: string) => void
}
  
export const AuthContext = createContext<AuthContextProps>({
  data: {
    id: 0,
    nome: "",
    bio: "",
    email: "",
    senha: ""
  },
  signIn: async (email, password) => false,
  saveId: async (id) => {},
  clearFormData: () => {},
  setNewFormData: (id, nome, bio, email) => {}
});

interface AuthProviderProps {
    children: ReactNode;
}

interface FormData {
    email: string;
    senha: string;
}

interface UserFormData extends FormData {
    nome: string;
    id: number;
    bio: string;
    avatar: string;
  }

export default function AuthProvider({children}: AuthProviderProps) {
    const [formData, setFormData] = useState({
      id: 0,
      nome: "",
      bio: "",
      email: "",
      senha: ""
    })

  const signIn = async (emailAdress: string, password: string) => {
    try {
      const response = await axios.post(`${apiURL}/usuarios/login`, {
        email: emailAdress,
        senha: password
      });
      const {bio, email, id, nome, senha} = response.data as UserFormData

      setFormData({
        id: id,
        nome: nome,
        bio: bio,
        email: email,
        senha: senha
      })
  
      return true;
    } catch (error) {
      return false;
    }
  };

  const saveId = async (id: number) => {
    try {
      const savedIds = await AsyncStorage.getItem("recentlyViewed");
      let ids = savedIds ? JSON.parse(savedIds) : [];
  
      if (!ids.includes(id)) {
        if (ids.length === 12) {
          ids.pop(); 
        }
      } else {
        const index = ids.indexOf(id);
        ids.splice(index, 1); 
      }
  
      ids.unshift(id);
  
      await AsyncStorage.setItem("recentlyViewed", JSON.stringify(ids));
    } catch (error) {
      console.error(error);
    }
  };

  const clearFormData = () => {
    setFormData({
      id: 0,
      nome: "",
      bio: "",
      email: "",
      senha: ""
    })
  } 

  const setNewFormData = (id: number, nome: string, bio: string, email: string) => {
    setFormData({
      id: id,
      nome: nome,
      bio: bio,
      email: email,
      senha: formData.senha
    })

  }

  useEffect(() => {
    console.log(formData)
  }, [formData])
    

  return(
      <AuthContext.Provider value={{ data: formData, signIn, saveId, clearFormData, setNewFormData  }} >
          {children}
      </AuthContext.Provider>
  )
}