import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {homeWomenAction} from '../../actions/homeTabAction';
import ParentCustomFlatList from '../../components/HomeParentFlatlist';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function Men() {
  const womenData = useSelector((store: any) => store.womenReducer);

  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(homeWomenAction());
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <ParentCustomFlatList data={womenData} />
    </View>
  );
}
