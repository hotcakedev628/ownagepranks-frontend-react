import React from 'react';
import {
  Button,
  Input
} from 'reactstrap';

const SearchBox = ({
  onSearch,
  onSearchChange
}) => {
  return (
    <div className="d-flex">
      <Input
        type="text"
        name="search"
        id="search"
        placeholder="Search Title..."
        onChange={onSearchChange}
      />
      <Button
        onClick={onSearch}
      >
        Search
      </Button>
    </div>
  );
}

export default SearchBox;
