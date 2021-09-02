import {useEffect, useState} from "react";
import {getUser} from "../utils/api";

let globalUser = null;
let observers = [];

const setGlobalUser = (newState) => {
  globalUser = newState;
  observers.forEach(update => update(globalUser));
};

export function useUser() {
  const [localUser, setLocalUser] = useState(globalUser);
  
  const getUserFunc = async () => {

    observers.push(setLocalUser);
    try{
      const user = await getUser();
      setGlobalUser(await user.json());
    }
    catch (e) {
      setGlobalUser(false)
    }


  }

  useEffect(()=> {
    getUserFunc();
    return () => {
      observers = observers.filter(update => update !== setLocalUser);
    };
  },[])
  
  return localUser;
}