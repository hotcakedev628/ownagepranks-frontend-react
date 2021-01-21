import React, {
  useEffect
} from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ListGroup,
  ListGroupItem
} from 'reactstrap';
import {
  getIdeas,
  setQuery
} from '../../../slices/ideas';
import { useDispatch, useSelector } from '../../../store';
import Pagination from '../../../components/Pagination';
import SearchBox from '../../../components/SearchBox';
import LoadingScreen from '../../../components/LoadingScreen';

const CategoryView = (props) => {
  console.log('props', props);
  const dispatch = useDispatch();
  const { state, pathname } = props.location;
  const { paging, ideas, query } = useSelector((state) => state.ideas);

  const handlePageClick = (e, index) => {
    dispatch(getIdeas(index, pathname, query));
  };

  const handlePreviousClick = (e, index) => {
    dispatch(getIdeas(index - 1, pathname, query));
  };

  const handleNextClick = (e, index) => {
    dispatch(getIdeas(index + 1, pathname, query));
  };

  const handleSearchChange = (e) => {
    dispatch(setQuery(e.target.value))
  }

  const getIdeasBySearch = () => {
    dispatch(getIdeas(0, pathname, query));
  }

  useEffect(() => {
    dispatch(getIdeas(0, pathname));
  }, [dispatch, pathname]);

  const toggle = () => {
    props.history.goBack();
  }

  return (
    <Modal
      isOpen={state.modal}
      toggle={toggle}
      size="xl"
    >
      <ModalHeader
        toggle={toggle}
        className="d-flex justify-content-between"
      >
        Prank Ideas
        <SearchBox
          onSearch={getIdeasBySearch}
          onSearchChange={handleSearchChange}
        />
      </ModalHeader>
      {
        !ideas ? (
          <LoadingScreen />
        ) : (
          <ModalBody>
            <ListGroup>
              {
                ideas.map(idea => {
                  return (
                    <ListGroupItem
                      key={idea.id}
                    >
                      {idea.title}
                    </ListGroupItem>
                  )
                })
              }
            </ListGroup>
            <Pagination
              currentPage={paging.page}
              countPage={paging.pageCount}
              onNext={handleNextClick}
              onPrevious={handlePreviousClick}
              onPageClick={handlePageClick}
            />
          </ModalBody>
        )
      }
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
}

export default CategoryView;
