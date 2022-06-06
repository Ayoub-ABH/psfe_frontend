import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { deleteReview, getAllReviews, reset, setReviewsList } from "../../features/review/reviewSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

function Reviews() {
  const [search, setSearch] = useState("");
  // const [reviews, setReviews] = useState([]);
  const dispatch = useDispatch()
  const {allReviews,allReviewsToSearch,isSuccess,isLoading,message,isError} = useSelector(
    (state) => state.reviews
  );


  const columns = [
    {
      name: "USER NAME",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "PRODUCT",
      selector: (row) => row.productName,
      width:"300px",
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
            onClick={() => dispatch(deleteReview({idReview:row._id,idProduct:row.product}))}
          >
            delete
          </button>
        </>
      ),
    },
  ];

  useEffect(async()=>{
    await dispatch(getAllReviews())
    if(isSuccess) {
      toast.success(message)
    }
    dispatch(reset())
  },[message])

  useEffect(() => {
    const newData = allReviewsToSearch.filter((dataItem) => {
      return dataItem.name.toLowerCase().match(search.toLowerCase());
    });
    dispatch(setReviewsList(newData))
  }, [search]);

  return (
    <div className="section mt-80">
      <div className="admin-data-table">
        <DataTable
          title="List of Reviews"
          keyField="_id"
          columns={columns}
          data={allReviews}
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
