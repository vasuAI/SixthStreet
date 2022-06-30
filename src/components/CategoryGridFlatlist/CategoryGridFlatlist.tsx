import React, {useCallback} from 'react';
import {vh, vw} from '../../utils/Dimensions';
import {normalize} from '../../utils/Dimensions';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';

/**
 *
 * @param {*} param0
 * @returns
 */
const CategoryGrid = ({data}: any) => {
  const {title, items} = data;
  const onRenderGrid = useCallback(
    ({item}: any) => {
      return (
        <View style={styles.renderDataContainer}>
          <Image
            source={{uri: item?.image_url}}
            style={styles.threeColumnImageStyle}
          />
          <Text style={styles.categoryFooterText}>{item?.label}</Text>
        </View>
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data],
  );

  const footerComponent = () => {
    return (
      <View style={styles.viewAll}>
        <Text style={styles.buttonText}>{'VIEW ALL'}</Text>
      </View>
    );
  };
  return (
    <View style={styles.flatListContainer}>
      <Text style={styles.titleTextStyle}>{title}</Text>
      <FlatList
        data={items}
        numColumns={3}
        renderItem={onRenderGrid}
        keyExtractor={item => item.label}
        ListFooterComponent={footerComponent}
      />
    </View>
  );
};

/**
 *
 */
const styles = StyleSheet.create({
  flatListContainer: {
    width: normalize(251),
    marginLeft: normalize(18),
    marginBottom: normalize(130),
  },

  titleTextStyle: {marginBottom: normalize(10)},
  renderDataContainer: {
    width: normalize(65),
    height: normalize(107),
    marginTop: normalize(5),
    marginRight: normalize(12),
  },
  threeColumnImageStyle: {
    width: normalize(62),
    height: normalize(62),
    borderRadius: normalize(31),
  },
  categoryFooterText: {
    textAlign: 'center',
    fontSize: normalize(10),
    marginTop: normalize(10),
  },
  viewAll: {
    height: vh(40),
    width: vw(178),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: normalize(15),
    borderRadius: normalize(6),
    backgroundColor: '#F8FAFB',
  },
  buttonText: {
    fontWeight: '600',
    fontSize: normalize(14),
  },
});

/**
 * @exports
 */
export default React.memo(CategoryGrid);
