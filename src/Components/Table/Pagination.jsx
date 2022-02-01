import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ totalPages, setPage }) {
  return (
    <div className="col-md-6">
      <ul className="pagination-bar">
        <ReactPaginate
          previousLabel={"Next"}
          nextLabel={"Previous"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={1}
          onPageChange={(page) => setPage(page.selected + 1)}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </ul>
    </div>
  );
}
