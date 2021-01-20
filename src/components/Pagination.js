import React from 'react';
import {
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';

const CategoriesPagination = ({
  currentPage,
  countPage,
  onPreviousClick,
  onNextClick,
  onPageClick
}) => {
  return (
    <Pagination aria-label="Categories Navigation">
      <PaginationItem
        disabled={currentPage <= 1}
      >
        <PaginationLink
          first
          href="#"
          onClick={e => onPageClick(e, 1)}
        />
      </PaginationItem>
      <PaginationItem
        disabled={currentPage <= 1}
      >
        <PaginationLink
          previous
          href="#"
          onClick={onPreviousClick}
        />
      </PaginationItem>
      {
        [...Array(countPage)].map((page, i) => (
          <PaginationItem active={i + 1 === currentPage} key={i}>
            <PaginationLink onClick={e => onPageClick(e, i + 1)} href="#">
              {i + 1}
            </PaginationLink>
          </PaginationItem>
         ))
      }
      <PaginationItem
        disabled={currentPage >= countPage}
      >
        <PaginationLink
          next
          href="#"
          onClick={onNextClick}
        />
      </PaginationItem>
      <PaginationItem
        disabled={currentPage >= countPage}
      >
        <PaginationLink
          last
          href="#"
          onClick={e => onPageClick(e, countPage)}
        />
      </PaginationItem>
    </Pagination>
  );
}

export default CategoriesPagination;