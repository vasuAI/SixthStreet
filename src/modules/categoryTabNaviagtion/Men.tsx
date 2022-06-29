import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CategoryParentFlatlist} from '../../components';
import {categoryMenAction} from '../../actions/categoryTabAction';

/**
 *
 * @returns
 */
const CategoryMen = () => {
  const dispatch = useDispatch<any>();
  const {data} = useSelector((store: any) => store.menCategoryReducer);
  const [Index, setIndex] = useState(0);

  useEffect(() => {
    dispatch(categoryMenAction());
  }, [dispatch]);

  return (
    <CategoryParentFlatlist
      Index={Index}
      setIndex={setIndex}
      data={data}
      setActive={true}
    />
  );
};

/**
 * @exports
 */
export default React.memo(CategoryMen);
