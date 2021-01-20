import React, {
  useEffect
} from 'react';
import { useDispatch } from '../../store';
import {
  getCategories
} from '../../slices/categories';
import CategoryList from '../../views/categories/CategoryList';
// import CategoryView from '../../views/categories/CategoryView';

const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div
      className="main-layout"
    >
      <CategoryList />
      {/* <CategoryView /> */}
    </div>
  );
}

export default MainLayout;