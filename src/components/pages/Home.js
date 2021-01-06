import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { TextField } from '@material-ui/core';


const Home = () => {
  const [users, setUser] = useState([]);
  const [q,setQ] = useState("");

  

  const search = (rowss) =>{


    return(
      rowss.filter(row=>{
      return(

        row.name.toString().toLowerCase().indexOf(q) > -1 ||
        row.username.toString().toLowerCase().indexOf(q) > -1 ||
        row.email.toString().toLowerCase().indexOf(q) > -1 
        //row.carbs.toString().toLowerCase().indexOf(q) > -1 ||
        //row.protein.toString().toLowerCase().indexOf(q) > -1 
      );
    })


    );
  }


  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <div class="fl w-50">
        <TextField  fullWidth className="ma-10 pa-4" id="outlined-search" label="Search Name"
           type="search" style={{ margin:18 }} variant="outlined" value={q} onChange={(e) => setQ(e.target.value)}   />
           </div>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {search(users).map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
