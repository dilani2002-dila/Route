import { useState } from "react";

export default function Filter(){
    const data =[
        {id:1, name: "Apple"},
        {id:2, name: "Graphs"},
        {id:3, name: "Mango"},
        {id:4, name: "Woodapple"},
    ];
    const [searchTerm,setSearchTerm]=useState("");
    const filteredData = data.filter((item)=>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
);

return(
    
    <>
    {
    filteredData.map((item)=>
    (
    <div>
        <span>id: {item.id} </span>
        <span>name:{item.name} </span>
        <hr />
    </div>
    ))}
        <h2>Search filter example</h2>
        <input type="text" placeholder="search by name" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}>
        </input>
     </>
);


}