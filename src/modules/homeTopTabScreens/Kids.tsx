import {Colors} from '../../utils';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {HomeParentFlatlist} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {homeKidsAction} from '../../actions/homeTabAction';

function Kids() {
  const kidsData = useSelector((store: any) => store.kidsReducer);

  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(homeKidsAction());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <HomeParentFlatlist data={kidsData} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.white},
});

export default React.memo(Kids);
