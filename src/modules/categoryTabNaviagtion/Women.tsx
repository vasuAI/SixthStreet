import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CategoryParentFlatlist} from '../../components';
import {categoryWomenAction} from '../../actions/categoryTabAction';

/**
 *
 * @returns
 */
const CategoryWomen = () => {
  const dispatch = useDispatch<any>();
  const {data} = useSelector((store: any) => store.womenCategoryReducer);

  const [Index, setIndex] = useState(0);
  useEffect(() => {
    dispatch(categoryWomenAction());
  }, [dispatch]);

  return (
    <CategoryParentFlatlist Index={Index} setIndex={setIndex} data={data} />
  );
};

/**
 * @exports
 */
export default React.memo(CategoryWomen);
