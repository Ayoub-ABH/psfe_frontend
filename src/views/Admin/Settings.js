import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";

const Settings = () => {
  const [settings, setSettings] = useState([]);
  const navigate = useNavigate();

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
        
          <button type="button" class="btn btn-sm btn-info nr-l" onClick={()=> navigate(`/admin/settings/update/${row.id}`)}>update</button>
          
        </>
      ),
    },
  ];
  
  const data = [
    {
      id:1,
      phone: "+212-6-95-51-84",
      email: "Electro.shop@electro.com",
      address:"Merrakech",
    }
  ];
  useEffect(() => {
    setSettings(data);
  }, []);
  return (
    <div className="section mt-80">
        <div className="admin-data-table">
            <DataTable
                title="List of Settings"
                columns={columns}
                data={settings}
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