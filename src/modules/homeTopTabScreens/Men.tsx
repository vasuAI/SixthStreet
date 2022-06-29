import {View} from 'react-native';
import React, {useEffect} from 'react';
import {HomeParentFlatlist} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {homeMenAction} from '../../actions/homeTabAction';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function Men() {
  const menData = useSelector((store: any) => store.menReducer);

  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(homeMenAction());
  }, [dispatch]);
  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <HomeParentFlatlist data={menData} />
    </View>
  );
}

export default React.memo(Men);
