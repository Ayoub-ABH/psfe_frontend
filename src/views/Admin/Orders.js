import React, { useEffect, useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";

function Orders() {
  const [search,setSearch] = useState("");
  const [orders,setOrders] =useState([]);
  const navigate = useNavigate()

  const columns = [
    {
      name: "USER",
      selector: (row) => row.user,
      keyField:true,
      sortable:true
    },
    {
      name: "ORDER ITEMS",
      cell: (row) => 
          <p>
            {row.orderItems.length} Products
          </p>
      ,
      wrap:true,
      width:'220px',
      sortable:true
    },
    {
      name: "SHIPPING ADDRESS",
      cell: (row) =>  
      <div style={{paddingTop:"5px"}}>
        <p>phone:   {row.shippingAddress.phone} </p>
        <p>country: { row.shippingAddress.country} </p>                 
        <p>address: {row.shippingAddress.address}</p>                  
        <p>postale code:  {row.shippingAddress.postalCode}</p>                 
        <p>city:  {row.shippingAddress.city} </p>                 
      </div>
        ,
      wrap:true,
      minWidth:"260px",
      sortable:true
    },
    ,
    {
      name: "PAYMENT METHOD",
      selector: (row) => row.paymentMethod,
      sortable:true
    },
    {
      name: "TOTAL PRICE",
      selector: (row) => row.totalPrice,
      sortable:true
    },
    {
      name: "STATUS",
      cell: (row) => 
      <span class="label label-info">{row.status}</span>,
      sortable:true
    },
    {
      name: "EDIT",
      width:'150px',
      cell: row => 
          <>
          <button type="button" class="btn btn-sm btn-danger" onClick={()=> alert(row.id)}>delete</button>
          <button type="button" class="btn btn-sm btn-info nr-l" onClick={()=> navigate(`/admin/orders/update/${row.id}`)}>update</button>
          </>
      ,
    },
  ];

  const data = [
    {
      user:"ayoub",
      orderItems:[{product:"6275412b66f5e2e95cee7a7d",quantity:2},{product:"62753faef9113e6808214ec1",quantity:1}],
      shippingAddress:
      {
          phone:"0619326345" ,
          address:"Tamgroute" ,
          city:"Zagora",
          postalCode:"46000" ,
          country:"Maroc"
      },
      paymentMethod:"card",
      status:"pending",
      totalPrice:123
    },
    {
      user:"ali",
      orderItems:[{product:"6275412b66f5e2e95cee7a7d",quantity:2}],
      shippingAddress:
      {
          phone:"0619326345" ,
          address:"lhricha" ,
          city:"hwara",
          postalCode:"8350" ,
          country:"Maroc"
      },
      paymentMethod:"card",
      status:"validated",
      totalPrice:123
    }
  ]
  useEffect(()=>{
    setOrders(data)
  },[])


  useEffect(()=>{
    const newData=data.filter(dataItem =>{
      return dataItem.user.toLowerCase().match(search.toLowerCase());
    })
    setOrders(newData)

  },[search])

  return (
    <div className="section mt-80">
      
      
      
    <div className="admin-data-table">
        <DataTable 
          title="List of Orders"
          columns={columns} 
          data={orders}
          pagination 
          fixedHeader
          fixedHeaderScrollHeight="55vh"
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
                onChange={(e)=> setSearch(e.target.value)}
              />
          }
          subHeaderAlign="left"
        />
    </div>
  </div>
  )
}

export default Orders