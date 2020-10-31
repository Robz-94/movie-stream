import React, { Component } from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { pageCount, pageSize, currentPage, onPageChange } = props;
  const pCount = Math.ceil(pageCount / pageSize);
  if (pCount === 1) return null;
  const pages = _.range(1, pCount + 1);
  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#">
            pervious
          </a>
          {/* iterative automatic page allocation*/}
        </li>
        {pages.map((page) => (
          <li
            key={page}
            class={page == currentPage ? "page-item active" : "page-item"}
          >
            <a class="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
        <li class="page-item">
          <a class="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
