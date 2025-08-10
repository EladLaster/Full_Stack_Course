import { useState } from "react";
import "./Hudini.css"

export function Hudini(){
    const [show,setShow] = useState(false);

    function taggleHudini(){
        setShow(!show);
    }
    return (
        <div>
            <button onClick={taggleHudini}>push to see Hudini</button>
            {show ? <div className="show">Now you see me</div> : <div className="show">Now you don't</div>}
        </div>
    )
}