import {Colors} from '../../utils';
import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ParentCustomFlatList} from '../../components';
import {homeWomenAction} from '../../actions/homeTabAction';

function Women() {
  const womenData = useSelector((store: any) => store.womenReducer);

  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(homeWomenAction());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <ParentCustomFlatList data={womenData} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.white},
});

export default React.memo(Women);
