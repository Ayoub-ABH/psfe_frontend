import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";

const Messages = () => {
  const [search, setSearch] = useState("");
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  const columns = [
    {
      name: "NAME",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "EMAIL",
      selector: (row) => row.email,
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
            onClick={() => alert(row.id)}
          >
            delete
          </button>
        </>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      name: "simo",
      email: "simo@gmail.com",
      objet:"probleme",
      message: "ajouter un produit au panier ne march pas",
    },
    {
      id: 2,
      name: "ayoub",
      email: "ayoub@gmail.com",
      objet:"probleme de payment",
      message: "verifier le payment",
    },
    {
        id: 3,
        name: "hassan",
        email: "hassan@gmail.com",
        objet:"probleme de lante de reponse",
        message: "le status de produit n'est pas changer",
    },
  ];
  useEffect(() => {
    setMessages(data);
  }, []);
  useEffect(()=>{
    const newData=data.filter(dataItem =>{
      return dataItem.name.toLowerCase().match(search.toLowerCase());
    })
    setMessages(newData)

  },[search])

  return (
    <div className="section mt-80">
        <div className="admin-data-table">
            <DataTable
            title="List of Messages"
            columns={columns}
            data={messages}
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
