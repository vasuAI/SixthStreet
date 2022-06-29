import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CategoryParentFlatlist} from '../../components';
import {categoryKidsAction} from '../../actions/categoryTabAction';

/**
 *
 * @returns
 */
const CategoryKids = () => {
  const dispatch = useDispatch<any>();
  const {data} = useSelector((store: any) => store.kidsCategoryReducer);

  const [Index, setIndex] = useState(0);

  useEffect(() => {
    dispatch(categoryKidsAction());
  }, [dispatch]);

  return (
    <CategoryParentFlatlist Index={Index} setIndex={setIndex} data={data} />
  );
};

/**
 * @exports
 */
export default React.memo(CategoryKids);
