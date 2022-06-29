import React from 'react';
import {normalize} from '../../utils/Dimensions';
import {View, Image, Text, StyleSheet} from 'react-native';

/**
 *
 * @param {*} param0
 * @returns
 */
const CategoryBanner = ({data}: any) => {
  return (
    <View style={styles.categoryBannerContainer}>
      <Image
        source={{uri: data.image_url}}
        style={styles.categoryBannerImage}
      />
      {data?.description ? (
        <Text style={styles.textBannnerStyle}>{data?.description}</Text>
      ) : null}
    </View>
  );
};

/**
 * @styles
 */
const styles = StyleSheet.create({
  categoryBannerContainer: {
    alignItems: 'center',
    width: normalize(251),
    marginBottom: normalize(20),
  },
  categoryBannerImage: {height: normalize(200), width: normalize(215)},
  textBannnerStyle: {
    lineHeight: normalize(18),
    fontSize: normalize(13),
    marginTop: normalize(10),
    alignSelf: 'flex-start',
    marginLeft: normalize(18),
  },
});

/**
 * @exports
 */
export default React.memo(CategoryBanner);
