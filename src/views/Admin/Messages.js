import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import { deleteContact, getAllContacts, reset } from "../../features/contact/contactSlice";
import { toast } from "react-toastify";

const Messages = () => {
  const [search, setSearch] = useState("");
  const [messages, setMessages] = useState([]);
  const {allContacts,message,isError,isSuccess} = useSelector(state=>state.contacts)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const columns = [
    {
      name: "NAME",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "EMAIL",
      selector: (row) => row.email,
      width:'200px',
      sortable: true,
    },
    {
      name: "OBJET",
      selector: (row) => row.objet,
      sortable: true,
    },
    {
      name: "MESSAGE",
      selector: (row) => row.message,
      width:"300px",
      sortable: true,
    },
    {
      name: "EDIT",
      cell: (row) => (
        <>
          <button
            type="button"
            class="btn btn-sm btn-danger"
            onClick={() => dispatch(deleteContact(row._id))}
          >
            delete
          </button>
        </>
      ),
    },
  ];
  
  useEffect(async()=>{

    await dispatch(getAllContacts())
    if(isSuccess) {
      toast.success(message)
    }
    dispatch(reset())
    
  },[message])

  // useEffect(()=>{
  //   const newData=data.filter(dataItem =>{
  //     return dataItem.name.toLowerCase().match(search.toLowerCase());
  //   })
  //   setMessages(newData)

  // },[search])

  return (
    <div className="section mt-80">
        <div className="admin-data-table">
            <DataTable
            title="List of Messages"
            keyField="_id"
            columns={columns}
            data={allContacts}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="54vh"
            selectableRows
            selectableRowsHighlight
            highlightOnHover
            subHeader
            subHeaderComponent={
                <input
                type="text"
                class="form-control w-25"
                placeholder="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
            }
            subHeaderAlign="left"
            />
        </div>
    </div>
)
};

export default Messages;
