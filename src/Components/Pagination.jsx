import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

export default function Pagination({
   total, perPage, handlePageClick 
}) {



  return (
    <div className="row">
    <div className="col-sm-12 col-md-5">
      <div
        className="dataTables_info"
        id="DataTables_Table_0_info"
        role="status"
        aria-live="polite"
      >
        {/* Showing 1 to 2 of 2 entries */}
      </div>
    </div>
    <div className="col-sm-12 col-md-7">
      <div
        className="dataTables_paginate paging_simple_numbers"
        id="DataTables_Table_0_paginate"
      >
     
        <ul className="pagination">
        <div>
        <ReactPaginate
          containerClassName="Pagination"
          pageClassName="paginate_button page-item"
          pageLinkClassName="page-link"
          activeClassName="active"
          previousClassName="page-item previous"
          previousLinkClassName="page-link"
          nextClassName=" page-item next"
          nextLinkClassName="page-link"
          activeLinkClassName="active"
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={total ? total : null}
          marginPagesDisplayed={2}
          pageRangeDisplayed={perPage ? perPage : null}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>

          </ul>
      </div>
    </div>
  </div>
  );
}
