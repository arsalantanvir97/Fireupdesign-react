import React, { useState } from "react";
import { useDebouncedEffect } from "../../Hooks/useDebouncedEffect";
import Button from "../Form/Button";
import Input from "../Form/Input";

import Loading from "../Icons/Loading";
import Search from "../Icons/Search";

export default function TableFilters({
  type_filter,
  status_filter,
  
  setSearchString,
  isFetching,
  setType,
  type,
  status,
  setStatus,
  setlimit,
}) {
  const [internal_search, setInternalSearch] = useState("");

  useDebouncedEffect(
    () => setSearchString && setSearchString(internal_search),
    [internal_search],
    500
  );

  return (
    <>
      <div className="col-lg-12 col-xl-7 text-left mt-3">
        <div className="table-input-date table-input-date-user">
          <label htmlFor className="custom-label-2 user-label">
            Sort By Date:
          </label>
          <input
            className="input-date ml-0 ml-xl-2 mb-3 mb-sm-0"
            type="date"
            name
            id
          />{" "}
          <span className="d-none d-sm-inline-block">-</span>{" "}
          <input type="date" className="input-date " name id />
        </div>
      </div>
      {status_filter?.length > 0 && (
        <div className="col-lg-12 col-xl-5 text-left text-xl-right mt-3 table-input-date-user">
          <div className="table-input-date ">
            <label htmlFor className="custom-label-2">
              Flter by Status:
            </label>
            <select onChange={(e)=>setStatus(e)} className="ml-0 ml-xl-2">
              <option value="" >select</option>
              {status_filter?.map((item) => (
                <option value={item?.value}>{item?.label}</option>
              ))}
             
            </select>
          </div>
        </div>
      )}
      <div className="col-sm-6 text-left mt-3">
        <div className>
          <label htmlFor className="custom-label-2 user-label">
            Show Entries:
          </label>
          <select
            className="show-entries ml-0 ml-md-2"
            onChange={(e) => setlimit(e)}
          >
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
      </div>

      {setSearchString && (
      <div className="col-sm-6 text-left text-sm-right  mt-3">
        <input
          type="text"
          value={internal_search}
          className="input-text ml-0 ml-sm-2 input-text-report-log"
          placeholder="Search"
          onChange={(e) =>
                                    setInternalSearch(e.target.value)
                                  }
        />
        
      </div>
       )}
    </>

    // <div className="card rounded-10 shadow-none">
    //   <div className="card-body dataTables_wrapper">
    //     <div className="page-title">
    //       <div className="row user-listing-top ">
    //         <div className="col-12 d-lg-flex d-md-block justify-content-center mt-3 mt-sm-0">
    //           {type_filter?.length > 0 && (
    //             <div className="filter-wrap custom-filter mr-1 d-flex align-items-center">
    //               <div className="select-wrapper d-block w-100">
    //                 <select
    //                   value={type}
    //                   onChange={(e) => setType(e.target.value)}
    //                   className="form-control"
    //                   id
    //                 >
    //                   {type_filter?.map((type) => (
    //                     <option value={type?.value}>{type?.label}</option>
    //                   ))}
    //                 </select>
    //               </div>
    //             </div>
    //           )}
    //           {status_filter?.length > 0 && (
    //             <div className="filter-wrap custom-filter mr-1 d-flex align-items-center">
    //               <div className="select-wrapper d-block w-100">
    //                 <select
    //                   value={status}
    //                   onChange={(e) => setStatus(e.target.value)}
    //                   className="form-control"
    //                   id
    //                 >
    //                   {status_filter?.map((type) => (
    //                     <option value={type?.value}>{type?.label}</option>
    //                   ))}
    //                 </select>
    //               </div>
    //             </div>
    //           )}
    //           {setSearchString && (
    //             <div className="filter-wrap custom-filter mr-1 d-flex align-items-center">
    //               <div className="input-wrapper d-block w-100">
    //                 <div className="dataTables_filter">
    //                   <div className="position-relative">
    //                     <Input
    //                       value={internal_search}
    //                       onChange={(internal_search) =>
    //                         setInternalSearch(internal_search)
    //                       }
    //                       startIcon={isFetching ? <Loading /> : <Search />}
    //                       placeholder="Search"
    //                       className="site-input w-100 py-2 px-3"
    //                     />
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
