import React from 'react'
import HashLoader from "react-spinners/HashLoader";


function Spinner() {
  const override =`
      display: block;
      border-color: red;
    `;
  return (
    <div className='backdrop'>
      <HashLoader color={'#D10024'} loading={true} css={override}  size={70} />
    </div>
  )
}

export default Spinner