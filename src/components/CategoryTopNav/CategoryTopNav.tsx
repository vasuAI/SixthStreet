import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import LocalImages from '../../utils/LocalImages';
import {normalize, vh, vw} from '../../utils/Dimensions';
import Colors from '../../utils/Colors';

const CustomTopHeader = ({setCardPress}: any) => {
  // const ref = useRef();
  const data = ['Women', 'Men', 'Kid'];
  const onTagPress = (item: any) => {
    setCardPress(item);
  };

  const onRender = useCallback(({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onTagPress(item);
        }}
        style={[styles.tab]}>
        <Text style={styles.tagTextStyle}>{item}</Text>
      </TouchableOpacity>
    );
  }, []);

  return (
    <View style={styles.main}>
      <FlatList
        horizontal
        data={data}
        renderItem={onRender}
        keyExtractor={item => item}
        showsHorizontalScrollIndicator={false}
      />
      <Image source={LocalImages.bagIcon} style={styles.shoppingBagStyle} />
    </View>
  );
};

/**
 * @styles
 */
const styles = StyleSheet.create({
  tab: {
    alignItems: 'center',
    marginHorizontal: 16,
    justifyContent: 'center',
    marginBottom: 10,
  },
  tabActiveStyle: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.black,
  },
  main: {
    height: vh(50),
    paddingHorizontal: vw(20),
    borderBottomWidth: normalize(1),
    borderBottomColor: Colors.grey,
  },
  shoppingBagStyle: {
    width: vw(24),
    height: vh(26),
    top: normalize(13),
    right: normalize(20),
    position: 'absolute',
  },
  tagTextStyle: {
    fontSize: normalize(15),
  },
  // flatListContainer: {width: vw(204)},
});

/**
 * @exports
 */
export default React.memo(CustomTopHeader);
