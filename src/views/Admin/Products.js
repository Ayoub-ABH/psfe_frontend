import React, { useEffect, useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import {  deleteProduct, getAllProductsAdmin, reset, setProductsList } from "../../features/product/productSlice";
import { toast } from "react-toastify";

function Products() {
  const [search,setSearch] = useState("");
  // const [products,setProducts] =useState([]);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {allProducts,allProductsToSearch,isSuccess,isLoading,message,isError} = useSelector(
    (state) => state.products
  );
  

  const columns = [
    {
      name: "IMAGE",
      selector: (row) => <img src={`img/${row.image}`} className="img-responsive w-50" alt={row.image}/>,
      width:'200px'
    },
    {
      name: "NAME",
      selector: (row) => row.name,
      width:'200px',
      wrap:true,
      sortable:true
    },
    {
      name: "DESCRIPTION",
      selector: (row) => row.description,
      width:'300px',
      wrap:true,
      sortable:true
    },
    {
      name: "DETAILS",
      selector: (row) => row.details,
      width:'300px',
      wrap:true,
      sortable:true
    },
    ,
    {
      name: "BRAND",
      selector: (row) => row.brand,
      width:'100px',
      sortable:true
    },
    {
      name: "CATEGORY",
      selector: (row) => row.category,
      width:'100px',
      sortable:true
    },
    {
      name: "PRICE",
      selector: (row) => row.price,
      width:'100px',
      sortable:true
    },
    {
      name: "QUANTITY",
      selector: (row) => row.quantity,
      width:'100px',
      sortable:true
    },
    {
      name: "RATING",
      selector: (row) => row.rating,
      width:'100px',
      sortable:true
    },
    {
      name: "NUMBER REVIEWS",
      selector: (row) => row.numReviews,
      width:'100px',
      sortable:true
    },
    {
      name: "EDIT",
      width:'150px',
      cell: row => 
          <>
          <button type="button" class="btn btn-sm btn-danger" onClick={()=> dispatch(deleteProduct(row._id))}>delete</button>
          <button type="button" class="btn btn-sm btn-info nr-l" onClick={()=> navigate(`/admin/products/update/${row._id}`)}>update</button>
          </>
      ,
    },
  ];



  useEffect(async()=>{

    await dispatch(getAllProductsAdmin())
    if(isSuccess) {
      toast.success(message)
    }
    dispatch(reset())
  },[message])


  useEffect(()=>{
    const newData=allProductsToSearch.filter(dataItem =>{
      return dataItem.name.toLowerCase().match(search.toLowerCase());
    })
    dispatch(setProductsList(newData))

  },[search])


  return (
    <div className="section mt-80">
    <div className="admin-data-table">
        <DataTable 
          title="List of Products"
          keyField="_id"
          columns={columns} 
          data={allProducts}
          pagination 
          fixedHeader
          fixedHeaderScrollHeight="56vh"
          selectableRows
          selectableRowsHighlight
          highlightOnHover
          actions={
          <Link class="btn btn-success" to="/admin/products/add" role="button">+ Add</Link>
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

  )
}

export default Products