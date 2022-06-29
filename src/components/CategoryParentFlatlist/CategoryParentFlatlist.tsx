import React from 'react';
import Colors from '../../utils/Colors';
import {normalize} from '../../utils/Dimensions';
import BannerTypes from '../../utils/BannerTypes';
import CategoryGrid from '../categoryGridFlatlist';
import CategoryBanner from '../categoryBannerFlatlist';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

/**
 *
 * @param {*} param
 * @returns
 */
const CommonCategoryFlatlist = ({data, Index, setIndex}: any) => {
  const onPressButton = (index: any) => {
    setIndex(index);
  };
  const _onRenderSideBar = ({item, index}: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onPressButton(index)}
        style={[
          styles.buttonTagStyle,
          {
            backgroundColor:
              Index === index ? item.design.background_color : Colors.white,
          },
        ]}>
        <Text
          style={[
            styles.textStyle,
            // eslint-disable-next-line react-native/no-inline-styles
            {color: Index === index ? 'white' : item.design.text_color},
          ]}>
          {item?.label.toUpperCase()}
        </Text>
      </TouchableOpacity>
    );
  };

  const _renderCategoryItem = ({item}: any): any => {
    const {type} = item;
    switch (type) {
      case BannerTypes.banner:
        return <CategoryBanner data={item} />;
      case BannerTypes.grid:
        return <CategoryGrid data={item} />;
    }
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={data}
        bounces={false}
        keyExtractor={item => item.key}
        renderItem={_onRenderSideBar}
        showsVerticalScrollIndicator={false}
      />
      <FlatList
        bounces={false}
        data={data[Index]?.data}
        keyExtractor={item => item.key + '?'}
        renderItem={_renderCategoryItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.seperatorLine}
      />
    </View>
  );
};

/**
 * @styles
 */
const styles = StyleSheet.create({
  mainContainer: {flexDirection: 'row'},
  buttonTagStyle: {
    width: normalize(130),
    height: normalize(40),
    padding: normalize(10),
    justifyContent: 'center',
  },
  seperatorLine: {
    borderLeftWidth: 0.3,
    borderLeftColor: 'grey',
  },
  textStyle: {
    fontSize: normalize(10),
    fontWeight: '500',
  },
});

/**
 * @exports
 */
export default React.memo(CommonCategoryFlatlist);
