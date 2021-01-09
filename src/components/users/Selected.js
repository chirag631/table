import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

const Selected = (props) => {
  const [users, setUser] = useState([]);
  const q=props.myname;
  const v=props.selectt;
console.log(v);



const selected=(rowss)=>{

return(
  rowss.filter(row=>{
    return(
      
    
        row.id.toString().toLowerCase().indexOf(v[0])>-1||
        row.id.toString().toLowerCase().indexOf(v[1])>-1||
        row.id.toString().toLowerCase().indexOf(v[2])>-1||
        row.id.toString().toLowerCase().indexOf(v[3])>-1||        
        row.id.toString().toLowerCase().indexOf(v[4])>-1||
        row.id.toString().toLowerCase().indexOf(v[5])>-1
      
    );
  })

);


}

  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">Selected ID'S</h1>
      <hr />
      <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              
            </tr>
          </thead>
          <tbody>
            {selected(users).map((user, index) => (
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};

const mapStateToProps =(state)=>{
  return{
    myname: state.name,
    selectt:state.selects
  }
}




export default connect(mapStateToProps,null)(Selected);
