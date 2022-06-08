import React, { useEffect, useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, getAllOrders, reset, setOrdersList } from "../../features/order/orderSlice";
import { toast } from "react-toastify";

function Orders() {
  const [search,setSearch] = useState("");
  // const [orders,setOrders] =useState([]);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {allOrders,allOrdersToSearch,isSuccess,message,isError} = useSelector(
    (state) => state.orders
  );

  const columns = [
    {
      name: "USER",
      selector: (row) => row.name,
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
          <button type="button" class="btn btn-sm btn-danger" onClick={()=> dispatch(deleteOrder(row._id))}>delete</button>
          <button type="button" class="btn btn-sm btn-info nr-l" onClick={()=> navigate(`/admin/orders/update/${row._id}`)}>update</button>
          </>
      ,
    },
  ];

  useEffect(async()=>{

    await dispatch(getAllOrders())
    if(isSuccess) {
      toast.success(message)
    }
    dispatch(reset())
    
  },[message])

  useEffect(()=>{
    const newData=allOrdersToSearch.filter(dataItem =>{
      return dataItem.name.toLowerCase().match(search.toLowerCase());
    })
    dispatch(setOrdersList(newData))

  },[search])

  return (
    <div className="section mt-80">
      
      
      
    <div className="admin-data-table">
        <DataTable 
          title="List of Orders"
          columns={columns} 
          keyField="_id"
          data={allOrders}
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