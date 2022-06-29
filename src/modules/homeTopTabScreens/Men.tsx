import {View, Text} from 'react-native';
import React, {Dispatch, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {homeMenAction} from '../../actions/homeTabAction';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomeParentFlatlist from '../../components/HomeParentFlatlist';

export default function Men() {
  const menData = useSelector((store: any) => store.menReducer);

  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(homeMenAction());
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <HomeParentFlatlist data={menData} />
    </View>
  );
}
