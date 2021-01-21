import React, {
  useEffect,
} from 'react';
import {
  Route
} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from '../../../store';
import {
  getCategories
} from '../../../slices/categories';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Pagination from '../../../components/Pagination';
import LoadingScreen from '../../../components/LoadingScreen';
import CategoryView from '../CategoryView';

const availableCategories = [
  {
    slug: 'view-all-pranks'
  },
  {
    slug: 'new-prank-calls'
  },
  {
    slug: 'food-restaurant-prank-calls'
  }
];

const CategoryList = ({
  ...rest
}) => {
  const dispatch = useDispatch();
  const { paging, categories } = useSelector((state) => state.categories);

  const handlePageClick = (e, index) => {
    dispatch(getCategories(index));
  };

  const handlePreviousClick = (e, index) => {
    dispatch(getCategories(index - 1));
  };

  const handleNextClick = (e, index) => {
    dispatch(getCategories(index + 1));
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    !categories ? (
      <LoadingScreen />
    ) : (
      <div
        className="categories"
        {...rest}
      >
        <ListGroup>
          {categories.map((category, i) => {
            return (
              <Link
                key={category.ext_id}
                to={{
                  pathname: `/${category.slug}`,
                  state: {
                    modal: true
                  }
                }}
              >
                <ListGroupItem>
                  {category.name}
                </ListGroupItem>
              </Link>
            )
          })}
        </ListGroup>
        <Pagination
          currentPage={paging.page}
          countPage={paging.pageCount}
          onPageClick={handlePageClick}
          onPrevious={e => handlePreviousClick(e)}
          onNext={e => handleNextClick(e)}
        />
        {
          availableCategories.map(category => {
            return (
              <Route
                key={category.slug}
                path={`/${category.slug}`}
                exact={true}
                render={(props) => (
                  <CategoryView {...props} />
                )}
              />
            )
          })
        }
      </div>
    )
  );
}

export default CategoryList;