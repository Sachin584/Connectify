import { useState } from "react"
import App from "./App"
import Practice from "./Practice";

function Demo(){
    const[val, setVal] = useState("demo");
    const[typed, setTyped] = useState("");
    let updateVal = ()=>{
        setVal(typed);
    }
    return(
        <div>
            <h2>Parent {val}</h2>
            <input onChange={(e)=>setTyped(e.target.value)}/>
            <button onClick={updateVal}>update</button>
            <Practice val = {typed} setTyped = {setTyped} updateVal={updateVal}/>
        </div>
    )
}

export default Demo