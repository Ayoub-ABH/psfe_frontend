import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { getAllSettings, reset } from "../../features/settings/settingsSlice";
import { toast } from "react-toastify";

const Settings = () => {
  const [settings, setSettings] = useState([]);
  const navigate = useNavigate();
  const { allSettings,message,isSuccess} = useSelector((state) => state.settings);
  const dispatch = useDispatch()


  const columns = [
    {
      name: "PHONE",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "EMAIL",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "ADDRESS",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: "EDIT",
      cell: (row) => (
        <>
        
          <button type="button" class="btn btn-sm btn-info nr-l" onClick={()=> navigate(`/admin/settings/update/${row._id}`)}>update</button>
          
        </>
      ),
    },
  ];
  
  useEffect(async()=>{
    await dispatch(getAllSettings())
    if(isSuccess) {
      toast.success(message)
    }
    dispatch(reset())
  },[message])

  return (
    <div className="section mt-80">
        <div className="admin-data-table">
            <DataTable
                title="List of Settings"
                keyField="_id"
                columns={columns}
                data={allSettings}
                pagination
                fixedHeader
                fixedHeaderScrollHeight="54vh"
                selectableRows
                selectableRowsHighlight
                highlightOnHover
                
            />
        </div>
    </div>
  )
}

export default Settings