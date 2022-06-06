import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import { deleteUser, getAllUsers, reset, setUsersList } from "../../features/user/userSlice";
import { toast } from "react-toastify";



function Users() {
  const [search,setSearch] = useState("");
  
  const navigate = useNavigate()
  const dispatch = useDispatch() 
  const {allUsers,allUsersToSearch,isSuccess,isLoading,message,isError} = useSelector(
    (state) => state.users
  );
  
  const columns = [
    {
      name: "IMAGE",
      selector: (row) => <img src={`img/${row.profilePicture}`} class="img-responsive w-50 admin-user-image" alt="profile"/>
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
          <button type="button" class="btn btn-sm btn-danger" onClick={()=> {dispatch(deleteUser(row._id))}}>delete</button>
          <button type="button" class="btn btn-sm btn-info nr-l" onClick={()=> navigate(`/admin/users/update/${row._id}`)}>update</button>
          </>
      ,
    },
  ];



  useEffect(async()=>{

    await dispatch(getAllUsers())
    if(isSuccess) {
      toast.success(message)
      
    }
    dispatch(reset())
  },[message])

  


  useEffect(()=>{
    const newData=allUsersToSearch.filter(dataItem =>{
      return dataItem.name.toLowerCase().match(search.toLowerCase());
    })
    dispatch(setUsersList(newData))
  },[search])

  return (
    <div className="section mt-80">
      <div className="admin-data-table">
          <DataTable 
            title="List of Users"
            keyField="_id"
            columns={columns} 
            data={allUsers}
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
