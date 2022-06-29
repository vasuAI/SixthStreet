import React from 'react';
import Colors from '../../utils/Colors';
import {View, StyleSheet} from 'react-native';
import {normalize} from '../../utils/Dimensions';

/**
 * @returns
 */
const ItemSeperator = () => {
  return <View style={styles.containerStyle}></View>;
};

/**
 * @styles
 */
const styles = StyleSheet.create({
  containerStyle: {
    height: normalize(2),
    marginBottom: normalize(5),
    backgroundColor: Colors.grey,
    marginHorizontal: normalize(15),
  },
});

/**
 * @exports
 */
export default React.memo(ItemSeperator);
