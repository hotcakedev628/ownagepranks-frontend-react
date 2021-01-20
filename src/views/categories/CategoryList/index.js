import React, {
  useEffect,
  useState,
  useCallback
} from 'react';
import {
  Route
} from 'react-router-dom';
// import { useDispatch, useSelector } from '../../../store';
import { Link } from 'react-router-dom';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
// import {
//   getCategories
// } from '../../slices/categories';
import { appConfig } from '../../../config';
import axios from 'axios';
import { ListGroup, ListGroupItem } from 'reactstrap';
import CategoriesPagination from '../../../components/Pagination';
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
  const [categories, setCategories] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [paging, setPaging] = useState(null);
  const [isLoading, setLoading] = useState(false);
  // const dispatch = useDispatch();
  const isMountedRef = useIsMountedRef();
  // const { isModalOpen } = useSelector((state) => state.categories);

  const handlePageClick = (e, index) => {
    console.log(index);
    setCurrentPage(index);
    getCategories(index);
  };

  const handlePreviousClick = (e, index) => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = (e, index) => {
    setCurrentPage(currentPage + 1);
  };

  const getCategories = useCallback(async (currentPage) => {
    try {
      setLoading(true);

      const response = await axios.get(`${appConfig.backendUrl}/prank/categories`, {
        params: {
          limit: 5,
          page: currentPage
        }
      });
      console.log(response);

      if (isMountedRef.current) {
        setCategories(response.data.categories);
        setPaging(response.data.paging);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    isLoading || !categories ? (
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
        <CategoriesPagination
          currentPage={paging.page}
          countPage={paging.pageCount}
          onPageClick={handlePageClick}
          onPreviousClick={e => handlePreviousClick(e)}
          onNextClick={e => handleNextClick(e)}
        />
        {
          availableCategories.map(category => {
            return (
              <Route
                path={`/${category.slug}`}
                exact={true}
                render={(props) => (<CategoryView {...props} />)}
              />
            )
          })
        }
      </div>
    )
  );
}

export default CategoryList;