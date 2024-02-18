import React from "react";
import { MagnifyingGlass } from "react-loader-spinner";

const Offline = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
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

      <h1 className="text-4xl font-bold">You are offline</h1>
      <h1 className="text-2xl">Please check your internet connection</h1>
    </div>
  );
};

export default Offline;
