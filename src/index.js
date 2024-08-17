import ReactDOM from 'react-dom';
import React,{useState,useEffect} from "react";

function Userdemo(){

  const[users,setUsers]=useState([]);
  const[loading,setLoading]=useState(true);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data=>{
      setUsers(data);
      setLoading(false);
    })

    .catch(error=>{
      console.log("if it is not loading,will be error message",error)
      setLoading(false);
    });
  },[]);

    if(loading){
      return<p>loading</p>
    }
    return(
      <div>
        <h1>List out the users</h1>
        <ol>
          {users.map(user=>(
            <li key={user.id}>{user.name}</li>
          ))}
        </ol>
      </div>
    )
  
}
ReactDOM.render(<Userdemo/>,document.getElementById("root"));
