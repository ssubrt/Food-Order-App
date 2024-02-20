import React from 'react'
import { useRouteError } from 'react-router-dom';
import { MagnifyingGlass } from 'react-loader-spinner';

const Error = () => {
    const error = useRouteError();
    
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
    <div>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </div>
    <h1>Oops!!</h1>
    <h2>Something Went Wrong</h2>
    <h2>
      {error.status}: {error.statusText}
    </h2>
  </div>
  )
}

export default Error;
