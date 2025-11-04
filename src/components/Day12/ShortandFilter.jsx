import { useState } from "react";

export default function SortandFilter(){
    const [sorted,setSorted]= useState(
    [
        { id: 1,name:"Dilani",age:23},
        { id: 2,name:"Dironi",age:18},
        { id: 3,name:"Roshani",age:12},
        { id: 4,name:"Lakshi",age:24},
    ]
    )
    const idSortingAs = ()=> {
        const sorting = [...sorted].sort((a,b)=>a.id - b.id);
        setSorted(sorting) 
    }
    const idSortingDs = ()=> {
        const sorting = [...sorted].sort((a,b)=>b.id - a.id);
        setSorted(sorting)
    }
    const ageSortingAs =()=> {
        const sorting = [...sorted].sort((a,b)=>a.age - b.age);
        setSorted(sorting)
    }
    const ageSortingDs =()=> {
        const sorting = [...sorted].sort((a,b)=>b.age - a.age);
        setSorted(sorting)
    }
    const stringAse =()=>{
        const sorting =[...sorted].sort((a,b)=>
        a.name.localeCompare(b.name));
        setSorted(sorting);
    }
    const stringDse =()=>{
        const sorting =[...sorted].sort((a,b)=>
        b.name.localeCompare(a.name));
        setSorted(sorting);
    }
return(
<>
    {
    sorted.map((item)=>
    (
    <div>
        <span>ID : {item.id} </span>
        <span>Name :{item.name} </span>
        <span>Age: {item.age} </span>
        <hr />
    </div>
    ))}
    <button onClick={idSortingAs}>As ID</button>
    <button onClick={idSortingDs}>Ds ID</button>
    <button onClick={ageSortingAs}>As Age</button>
    <button onClick={ageSortingDs}>Ds Age</button>
    <button onClick={stringAse}>Ase string</button>
    <button onClick={stringDse}>Dse string</button>
</>

    );
}