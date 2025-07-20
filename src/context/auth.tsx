import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { apiURL } from "../../api";
import { axiosInstance } from "../lib/axios";


interface AuthContextProps {
  data: {
    id: number
    bio: string;
    nome: string,
    email: string,
    senha: string,
    avatar: string
  }
  signIn: (email: string, password: string) => Promise<boolean>,
  saveId: (id: number) => void,
  clearFormData: () => void,
  setNewFormData: (id: number, nome: string, bio: string, email: string, avatar: string) => void
}

export const AuthContext = createContext<AuthContextProps>({
  data: {
    id: 0,
    nome: "",
    bio: "",
    email: "",
    senha: "",
    avatar: ""
  },
  signIn: async (email, password) => false,
  saveId: async (id) => { },
  clearFormData: () => { },
  setNewFormData: (id, nome, bio, email, avatar) => { }
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

export default function AuthProvider({ children }: AuthProviderProps) {
  const [formData, setFormData] = useState({
    id: 0,
    nome: "",
    bio: "",
    email: "",
    senha: "",
    avatar: ""
  })

  const signIn = async (emailAdress: string, password: string) => {
    try {
      const response = await axiosInstance.post(`/auth/authenticate`, {
        email: emailAdress,
        senha: password
      });

      const token = response.data.token;
      const { id, email, nome, senha, bio, avatar } = response.data.user;
      setFormData({
        id: id,
        nome: nome,
        bio: bio,
        email: email,
        senha: senha,
        avatar: avatar
      })
      console.log(token)
      console.log(formData)

      await AsyncStorage.setItem('@token', token);

      return token;
    } catch (error) {
      console.error("Error de requisição: ", error);
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
      senha: "",
      avatar: ""
    })
  }

  const setNewFormData = (id: number, nome: string, bio: string, email: string, avatar: string) => {
    setFormData({
      id: id,
      nome: nome,
      bio: bio,
      email: email,
      senha: formData.senha,
      avatar: avatar
    })

  }

  useEffect(() => {
    console.log(formData)
  }, [formData])


  return (
    <AuthContext.Provider value={{ data: formData, signIn, saveId, clearFormData, setNewFormData }} >
      {children}
    </AuthContext.Provider>
  )
}