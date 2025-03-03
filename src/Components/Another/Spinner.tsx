import React from 'react'
import { PuffLoader } from 'react-spinners'


function Spinner() {
  return (
    <>
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      backgroundColor: '#272727',
      
    }}>
      <PuffLoader loading={true} color={"#faed26"} size={70} />
    </div>
    </>
  );
}

export default Spinner;