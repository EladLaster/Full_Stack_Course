import { useEffect, useState } from "react";

export function Exercise1 (){
    const currentTime = new Date().toLocaleTimeString(); 
    const [time,setTime] = useState(currentTime)
    
    useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
     return () => clearInterval(interval);
  }, []);

    return(
        <div>{time}</div>
    )
}