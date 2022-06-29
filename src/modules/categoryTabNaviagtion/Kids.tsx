// import {View} from 'react-native';
// import React, {useEffect} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {Colors} from '../../utils';
// import {categoryKidsAction} from '../../actions/categoryTabAction';

// export default function Kids() {
//   const dispatch = useDispatch<any>();
//   useEffect(() => {
//     dispatch(categoryKidsAction());
//   }, []);
//   return <View style={{flex: 1, backgroundColor: Colors.white}}>

//   </View>;
// }

import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CategoryParentFlatlist from '../../components/CategoryParentFlatlist';
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
  }, []);

  return (
    <CategoryParentFlatlist Index={Index} setIndex={setIndex} data={data} />
  );
};

/**
 * @exports
 */
export default React.memo(CategoryKids);
