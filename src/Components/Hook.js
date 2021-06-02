import React,{useState,useEffect} from 'react';

const Hook=()=>{
    useEffect(
        ()=>{console.dir(name+"is Printed")},[]
    )
    useEffect(
        ()=>console.dir("Updated",name)
    )
    let [name, setName] = useState('india')
    return(
        <h1>
            State :: {name}
            <button className="btn btn-info" onClick={()=>name==="India"?setName("Chinna"):setName("India")}>Change</button>
        </h1>
    );
}
export default Hook;