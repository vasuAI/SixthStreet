import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CategoryParentFlatlist from '../../components/CategoryParentFlatlist';
import {categoryMenAction} from '../../actions/categoryTabAction';

/**
 *
 * @returns
 */
const CategoryMen = () => {
  const dispatch = useDispatch<any>();
  const {data} = useSelector((store: any) => store.menCategoryReducer);
  const [active, setActive] = useState(false);
  const [Index, setIndex] = useState(0);

  useEffect(() => {
    dispatch(categoryMenAction());
  }, []);

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
