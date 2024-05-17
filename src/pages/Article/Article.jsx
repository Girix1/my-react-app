import { useEffect, useState } from "react";

export default function Article() {
  
  const [cookies, setCookies] = useState(0);

  const inceraseCookies = () => {
    setCookies(cookies +1)
  }
  
  useEffect(()=>{ 
   document.title = "Cookie clicker loaded" 
   }, []);

   useEffect(()=>{ 
    document.title = cookies; 
    }, [cookies]);

  return (
    <>
     <button onClick={inceraseCookies}>Incerase cookies</button> 
     <p>Cookies: {cookies} </p>
     <p>Article</p>
    </>
  );
}
