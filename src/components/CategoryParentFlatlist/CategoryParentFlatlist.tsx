import React from 'react';
import Colors from '../../utils/Colors';
import {normalize} from '../../utils/Dimensions';
import BannerTypes from '../../utils/BannerTypes';
import CategoryGrid from '../../components/CategoryGridFlatlist';
import CategoryBanner from '../../components/CategoryBannerFlatlist';
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
  const onRenderLeftFlatlist = ({item, index}: any) => {
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
          style={{
            fontSize: normalize(10),
            fontWeight: '500',
            color: Index == index ? 'white' : item.design.text_color,
          }}>
          {item?.label.toUpperCase()}
        </Text>
      </TouchableOpacity>
    );
  };

  const _renderItem = ({item}: any): any => {
    if (item?.type == BannerTypes.banner) return <CategoryBanner data={item} />;
    else if (item?.type == BannerTypes.grid)
      return <CategoryGrid data={item} />;
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={data}
        bounces={false}
        keyExtractor={item => item.key}
        renderItem={onRenderLeftFlatlist}
        showsVerticalScrollIndicator={false}
      />
      <FlatList
        bounces={false}
        data={data[Index]?.data}
        // keyExtractor={item =>item}
        renderItem={_renderItem}
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
  },
  seperatorLine: {
    borderLeftWidth: 0.3,
    borderLeftColor: 'grey',
  },
});

/**
 * @exports
 */
export default React.memo(CommonCategoryFlatlist);
