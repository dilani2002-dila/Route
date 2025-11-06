
import { useState } from "react";

export default function Travel() {
const data=[
    {name:"Oceanview Resort",city:"Galle",price:"$85",button:"Book Now"},
    {name:"Mountain Retreat",city:"Nuwara Eliya",price:"$72",button:"Book Now"},
    {name:"City Central Hotel",city:"Colombo",price:"$110",button:"Book Now"},
    {name:"Lakeside Villas",city:"Kandy",price:"$95",button:"Book Now"}
]

 let handleClick=(item)=>{
    alert(`${item.name} bookes`)
 }
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "darkgreen" }}>Travel Booking App</h1>

        <input
          type="text"
          placeholder="Search hotels"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{
            padding: "8px",
            width: "250px",
            borderRadius: "5px",
            border: "1px solid ",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "30px",
        }}
      >
        {filteredData.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid",
              borderRadius: "10px",
              padding: "10px",
              width: "220px",
              textAlign: "center",
              backgroundColor: "white",
            }}
          >
            <h2 style={{ color: "darkgreen" }}>{item.name}</h2>
            <h2>{}</h2>
            <p><strong>City:</strong> {item.city}</p>
            <p><strong>Price:</strong> {item.price}</p>
            <button
              style={{
                backgroundColor: "darkgreen",
                color: "white",
                border: "none",
                borderRadius: "7px",
                height: "35px",
                width: "100px",
                
              }}
              onClick={()=>handleClick(item)}
            >
              {item.button}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}


