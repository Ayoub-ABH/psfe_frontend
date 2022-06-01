import React, { useEffect, useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";

function Products() {
  const [search,setSearch] = useState("");
  const [products,setProducts] =useState([]);
  const navigate = useNavigate()

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
      width:'100px',
      sortable:true
    },
    {
      name: "DETAILS",
      selector: (row) => row.details,
      width:'100px',
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
          <button type="button" class="btn btn-sm btn-danger" onClick={()=> alert(row.id)}>delete</button>
          <button type="button" class="btn btn-sm btn-info nr-l" onClick={()=> navigate(`/admin/products/update/${row.id}`)}>update</button>
          </>
      ,
    },
  ];
  const data = [
    {
      name: "Airpods Wireless Bluetooth Headphones",
      image: "product01.png",
      description:
        "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
        details:
        "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
      brand: "Apple",
      category: "electorinics",
      price: 89.99,
      quantity: 10,
      rating: 4.5,
      numReviews: 12,
    },
    {
      name: "iPhone 11 Pro 256GB Memory",
      image: "product02.png",
      description:
        "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
        details:
        "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
      brand: "Apple",
      category: "phones",
      price: 599.99,
      quantity: 7,
      rating: 4.0,
      numReviews: 8,
    },
    {
      name: "Cannon EOS 80D DSLR Camera",
      image: "product03.png",
      description:
        "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
        details:
        "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
      brand: "Cannon",
      category: "Women",
      price: 929.99,
      quantity: 5,
      rating: 3,
      numReviews: 12,
    },
    {
      name: "Sony Playstation 4 Pro White Version",
      image: "product04.png",
      description:
        "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
        details:
        "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
      brand: "Sony",
      category: "Women",
      price: 399.99,
      quantity: 11,
      rating: 5,
      numReviews: 12,
    },
    {
      name: "Logitech G-Series Gaming Mouse",
      image: "product06.png",
      description:
        "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
        details:
        "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
      brand: "Logitech",
      category: "Women",
      price: 49.99,
      quantity: 7,
      rating: 3.5,
      numReviews: 10,
    },
    {
      name: "Sony Playstation 4 Pro White Version",
      image: "product07.png",
      description:
        "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
        details:
        "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
      brand: "Sony",
      category: "Women",
      price: 399.99,
      quantity: 11,
      rating: 5,
      numReviews: 12,
    },
    {
      name: "Logitech G-Series Gaming Mouse",
      image: "product08.png",
      description:
        "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
        details:
        "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
      brand: "Logitech",
      category: "Women",
      price: 49.99,
      quantity: 7,
      rating: 3.5,
      numReviews: 10,
    },
    {
      name: "Sony Playstation 4 Pro White Version",
      image: "product09.png",
      description:
        "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
        details:
        "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
      brand: "Sony",
      category: "Women",
      price: 399.99,
      quantity: 11,
      rating: 5,
      numReviews: 12,
    },
    {
      name: "Logitech G-Series Gaming Mouse",
      image: "product08.png",
      description:
        "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
        details:
        "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
      brand: "Logitech",
      category: "Women",
      price: 49.99,
      quantity: 7,
      rating: 3.5,
      numReviews: 10,
    }
  ]

  useEffect(()=>{
    setProducts(data)
  },[])


  useEffect(()=>{
    const newData=data.filter(dataItem =>{
      return dataItem.name.toLowerCase().match(search.toLowerCase());
    })
    setProducts(newData)

  },[search])


  return (
    <div className="section mt-80">
    <div className="admin-data-table">
        <DataTable 
          title="List of Products"
          columns={columns} 
          data={products}
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