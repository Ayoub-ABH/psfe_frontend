import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";

function Reviews() {
  const [search, setSearch] = useState("");
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  const columns = [
    {
      name: "USER NAME",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "PRODUCT",
      selector: (row) => row.product,
      sortable: true,
    },
    {
      name: "RATING",
      selector: (row) => row.rating,
      sortable: true,
    },
    {
      name: "COMMENT",
      selector: (row) => row.comment,
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
      id: "6288f269e4512ccbfcfeb257",
      name: "simo",
      rating: 3,
      comment: "nice product",
      product: "6288edff310168634c804985",
    },
    {
      id: "6288f269e4512ccbfcfeb457",
      name: "ayoub",
      rating: 3,
      comment: "produit nadiiii",
      product: "6288edff310168634c804985",
    },
  ];
  useEffect(() => {
    setReviews(data);
  }, []);

  useEffect(() => {
    const newData = data.filter((dataItem) => {
      return dataItem.name.toLowerCase().match(search.toLowerCase());
    });
    setReviews(newData);
  }, [search]);

  return (
    <div className="section mt-80">
      <div className="admin-data-table">
        <DataTable
          title="List of Reviews"
          columns={columns}
          data={reviews}
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
  );
}

export default Reviews;
