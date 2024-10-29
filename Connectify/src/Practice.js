import { useState } from "react";

export default function Practice(props){
    const{val, setTyped, updateVal} = props;
    return(
        <div>
            <h1>Child</h1>
            <input value={val} onChange={(e)=>setTyped(e.target.value)}/>
            <button onClick={updateVal}>update</button>
        </div>
    )
}