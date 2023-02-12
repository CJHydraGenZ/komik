import React from "react";
import LoadingKomik from "./loadingKomik";

export default function LoadingListKomik() {
  return (
    <>
      {/* <div className="filter bg-slate-300 h-60 w-full">filter</div> */}

      <div className="w-full px-4 py-2">
        <div className="flex flex-col w-full h-full gap-2">
          {/* {pages} */}
          <LoadingKomik />
          <LoadingKomik />
          <LoadingKomik />
          <LoadingKomik />
        </div>
        {/* <button className="btn" onClick={() => setCnt(cnt + 1)}>Load More</button> */}
      </div>
    </>
  );
}
