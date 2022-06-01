import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";

function Users() {
  const [search,setSearch] = useState("");
  const [users,setUsers] =useState([]);
  const navigate = useNavigate()

  const columns = [
    {
      name: "IMAGE",
      selector: (row) => <img src={`img/${row.image}`} class="img-responsive w-50 admin-user-image" alt="profile"/>
    },
    {
      name: "NAME",
      selector: (row) => row.name,
      sortable:true
    },
    {
      name: "ROLE",
      selector: (row) => row.role,
      sortable:true
    },
    {
      name: "EMAIL",
      selector: (row) => row.email,
      sortable:true
    },
    {
      name: "EDIT",
      cell: row => 
          <>
          <button type="button" class="btn btn-sm btn-danger" onClick={()=> alert(row.id)}>delete</button>
          <button type="button" class="btn btn-sm btn-info nr-l" onClick={()=> navigate(`/admin/users/update/${row.id}`)}>update</button>
          </>
      ,
    },
  ];

  const data = [
    {
      id: 1,
      image:"profile.jpg",
      name: "ayoub",
      role: "admin",
      email: "ayoub@gmail.com"
    },
    {
      id: 2,
      image:"profile-img.png",
      name: "hassan eddamer",
      role: "user",
      email: "hassan@gmail.com"
    },
    {
      id: 3,
      image:"profile-img.png",
      name: "Ali abo ali",
      role: "user",
      email: "ali@gmail.com"
    },
    {
      id: 4,
      image:"profile-img.png",
      name: "mostapha",
      role: "user",
      email: "mostapha@gmail.com"
    }
  ];


  useEffect(()=>{
    setUsers(data)
  },[])


  useEffect(()=>{
    const newData=data.filter(dataItem =>{
      return dataItem.name.toLowerCase().match(search.toLowerCase());
    })
    setUsers(newData)

  },[search])

  return (
    <div className="section mt-80">
      <div className="admin-data-table">
          <DataTable 
            title="List of Users"
            columns={columns} 
            data={users}
            pagination 
            fixedHeader
            fixedHeaderScrollHeight="54vh"
            selectableRows
            selectableRowsHighlight
            highlightOnHover
            actions={
            <Link class="btn btn-success" to="/admin/users/add" role="button">+ Add</Link>
            }
            subHeader
            subHeaderComponent={
                <input 
                  type="text" 
                  class="form-control w-25" 
                  placeholder="search"
                  value={search}
                  onChange={(e)=> setSearch(e.target.value)}
                />
            }
            subHeaderAlign="left"
          />
      </div>
    </div>
  );
}

export default Users;
