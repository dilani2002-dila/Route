export default function Task()
{
    return(
    <div style={{marginLeft:"450px"}}>
        <h2 style={{marginLeft:"140px"}}>Application Form</h2>
    <form style={{border:"4px solid green",width:"455px",height:"500px",borderRadius:"7px"}}>
    <div style={{marginLeft:"20px",marginTop:"30px"}}>

    <div>
        <label>First Name:</label><br></br>
        <input
         type="text"
         name="name" 
        />
    </div><br></br>

    <div>
        <label>Last Name:</label><br></br>
        <input
         type="text"
         name="name"
        />
    </div><br></br>

    <div>
        <label>Email:</label><br></br>
        <input
         type="email"
         name="name"
        />
    </div><br></br>

    <div>
        <label>Gender:</label><br></br>
        <input type="radio"></input><label>Female:</label><br></br>
        <input type="radio"></input><label>Male:</label>
           
    </div><br></br>

    <div>
        <label>Address:</label><br></br>
        <input
         type="text"
         name="name"
        />
    </div><br></br>
       
    <div>
        <label>Comment:</label><br></br>
        <textarea
         name="comment"
         style={{ width: "350px", height: "65px", padding: "5px" }}
        >
    </textarea>
    </div><br></br>



    <button type="submit" style={{backgroundColor:"green",borderRadius:"7px",height:"24px",width:"80px",color:"white"}}>Submit</button>
    </div>
    </form>
    </div>
        );
}


















