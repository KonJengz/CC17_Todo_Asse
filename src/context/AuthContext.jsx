import { createContext, useEffect, useState } from 'react';
import * as userAPI from '../apis/apiAuth';
import axios from 'axios';


export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);


    // register
    const register = async (data) => {
      try {
        const res = await userAPI.createUser(data);
        console.log(res.status)

      } catch (error) {
        console.log(error);
      }
    };

    // login
    const loginWeb = async (data) => {
        try {
          const res = await axios.post(`https://cc17-assessment-api.onrender.com/auth/login`,data);
          setUser(res.data);
          console.log(res.status)
            return true
        } catch (error) {
          setUser(null);
          console.log(error);
          return false
        }
      };
  
    const logout = () => {
      setUser(null);
    };
  
    return <AuthContext.Provider value={{ register, loginWeb }}>{children}</AuthContext.Provider>;
  }