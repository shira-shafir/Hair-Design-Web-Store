import {useEffect, useState} from "react";
import {getUser} from "../utils/api";

export function useUser() {
  const [user, setUser] = useState(null);
  
  const getUserFunc = async () => {
    try{
      const user = await getUser();
      setUser(await user.json());
    }
    catch (e) {
      setUser(false)
    }
  }

  
  useEffect(getUserFunc,[])
  
  return user;
}