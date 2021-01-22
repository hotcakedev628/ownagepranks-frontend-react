import React from 'react';
import {
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';

const PaginationComponent = ({
  currentPage,
  countPage,
  onPrevious,
  onNext,
  onPageClick
}) => {
  return (
    <Pagination aria-label="Pagination"
      className="d-flex justify-content-center"
    >
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
          onClick={onPrevious}
        />
      </PaginationItem>
      {
        [...Array(countPage)].map((page, i) => (
          <PaginationItem active={i + 1 === currentPage} key={i}>
            <PaginationLink onClick={e => onPageClick(e, i + 1)}>
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
          onClick={onNext}
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

export default PaginationComponent;