import { useState } from "react";

export default function SortandFilter(){
    const [sorted,setSorted]= useState(
    [
        { id: 1,name:"Arun",marks:85,department:"computer"},
        { id: 2,name:"Meena",marks:92,department:"electronics"},
        { id: 3,name:"Suresh",marks:78,department:"mechanical"},
        { id: 4,name:"Diwya",marks:88,department:"civil"},
        { id: 5,name:"Kishore",marks:95,department:"computer"},
        { id: 6,name:"Priya",marks:81,department:"electronics"},
        { id: 7,name:"Nirmal",marks:89,department:"civil"},
    
    ]
    )
    const marksSortingAs = ()=> {
        const sorting = [...sorted].sort((a,b)=>a.marks - b.marks);
        setSorted(sorting) 
    }
    const marksSortingDs = ()=> {
        const sorting = [...sorted].sort((a,b)=>b.marks - a.marks);
        setSorted(sorting)
    }
    const departmentSortingAs = ()=> {
        const sorting = [...sorted].sort((a,b)=>a.department - b.department);
        setSorted(sorting) 
    }
    const departmentSortingDs = ()=> {
        const sorting = [...sorted].sort((a,b)=>b.department - a.department);
        setSorted(sorting)
    }
    return(

        <>
         {
    sorted.map((item)=>
    (
    <div>
        <span>ID : {item.id} </span>
        <span>Name :{item.name} </span>
        <span>Marks :{item.marks} </span>
        <span>Department:{item.department} </span>
        <hr />
    </div>
    ))}
        <button onClick={marksSortingAs}>marksAs</button>
        <button onClick={marksSortingDs}>marksDs</button>
        <button onClick={departmentSortingAs}>As department</button>
        <button onClick={departmentSortingDs}>Ds department</button>
</>
    );

}