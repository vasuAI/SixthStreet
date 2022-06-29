import React, {useCallback} from 'react';
import {normalize} from '../../utils/Dimensions';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';

/**
 *
 * @param {*} param
 * @returns
 */
const GridFlatLIst = ({data}: any) => {
  const {items_per_row, image_size, items, header} = data;
  const itemWidth = 340 / (items_per_row * 1.02);
  const itemHeight = image_size.height * (itemWidth / image_size.width);

  const onRenderGrid = useCallback(
    ({item}: any) => {
      const {url, footer} = item;
      return (
        <View style={styles.gridItemContainer}>
          <Image
            style={[
              styles.gridCircleItemImage,
              {height: normalize(itemHeight), width: normalize(itemWidth)},
            ]}
            source={{uri: url}}
          />
          {footer?.title != null ? (
            <Text
              style={[
                styles.gridCircleItemTitle,
                {fontWeight: footer?.subtitle != null ? '600' : '300'},
              ]}>
              {footer?.title}
            </Text>
          ) : null}
          {footer?.subtitle != null ? (
            <Text style={styles.gridCircleItemFooter}>
              {footer?.subtitle ?? null}
            </Text>
          ) : null}
        </View>
      );
    },
    [data],
  );

  return (
    <View style={styles.gridParentContainer}>
      {header != null && (
        <Text style={styles.gridHeaderContainer}>{header.title}</Text>
      )}
      <FlatList
        data={items}
        scrollEnabled={false}
        renderItem={onRenderGrid}
        numColumns={items_per_row}
        keyExtractor={item => item.tag}
      />
    </View>
  );
};

/**
 * @styles
 */
const styles = StyleSheet.create({
  gridParentContainer: {
    alignItems: 'center',
    marginHorizontal: normalize(12),
  },
  gridHeaderContainer: {
    alignSelf: 'flex-start',
    fontSize: normalize(14),
    textTransform: 'uppercase',
    marginVertical: normalize(5),
  },
  gridItemContainer: {
    margin: normalize(4),
  },
  gridCircleItemImage: {
    width: normalize(115),
    height: normalize(115),
  },
  gridCircleItemTitle: {
    margin: normalize(2),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  gridCircleItemFooter: {
    fontWeight: '400',
    textAlign: 'center',
    fontSize: normalize(12),
  },
});

/**
 * @exports
 */
export default React.memo(GridFlatLIst);
