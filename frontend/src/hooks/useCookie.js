import {useEffect, useState} from "react";
const cookieName = "Token"; //TODO check the real cookie name

export function useUser() {
  const [hasSessionCookies, setHasSessionCookies] = useState(false);
  
  const getCookieFunc = async () => {
    try{
      const cookies = document.cookie.split(";");
      for (const cookie of cookies) {
        if (cookie.startsWith(cookieName)){
          return setHasSessionCookies(true);
        }
      }

    }
    catch (e) {
      setHasSessionCookies(false)
    }

  }
  
  useEffect(getCookieFunc,[])
  
  return hasSessionCookies;
}