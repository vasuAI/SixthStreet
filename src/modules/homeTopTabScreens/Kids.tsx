import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {homeKidsAction} from '../../actions/homeTabAction';
import HomeParentFlatlist from '../../components/HomeParentFlatlist';
import {Colors} from '../../utils';

export default function Kids() {
  const kidsData = useSelector((store: any) => store.kidsReducer);

  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(homeKidsAction());
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <HomeParentFlatlist data={kidsData} />
    </View>
  );
}
