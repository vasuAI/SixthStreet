/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback} from 'react';
import {normalize} from '../../utils/Dimensions';
import {StyleSheet, Text, FlatList, Image} from 'react-native';

/**
 *
 * @param {*} props
 * @returns
 */

const BannerFlatList = (props: any) => {
  const {data, header, tag} = props;
  console.log('data', props);

  const onBannerRender = useCallback(
    ({item}: any) => {
      return (
        <>
          {header ? (
            <Text style={styles.headerTitleStyle}>{header?.title}</Text>
          ) : null}
          <Image
            source={{uri: item.url}}
            style={bannerCustomStyle(item.height, tag)}
          />
        </>
      );
    },
    [data],
  );

  // eslint-disable-next-line no-shadow
  const bannerCustomStyle = (height: number, tag: String) => {
    if (height === 125) {
      return styles.bannerStripImage;
    } else if (height === 1080) {
      return styles.offerBannerImage;
    } else if (height === 487) {
      return styles.bannerTitlesImage;
    } else if (height === 720) {
      return styles.bannerCover;
    } else if (height === 313) {
      return styles.bannerWideView;
    } else if (tag === "Influencer's choice-Banner-May-View All") {
      return styles.viewAllButton;
    } else if (tag === 'Home-PremiumEdit-banner-Tommy Hilfiger-May') {
      return styles.tommyImage;
    }
  };

  return (
    <FlatList
      data={data}
      bounces={false}
      renderItem={onBannerRender}
      keyExtractor={item => item.tag}
      showsVerticalScrollIndicator={false}
    />
  );
};

/**
 * @styles
 */
const styles = StyleSheet.create({
  bannerWideView: {
    width: '95%',
    alignSelf: 'center',
    resizeMode: 'contain',
    height: normalize(100),
  },
  headerTitleStyle: {
    letterSpacing: 1.5,
    fontWeight: '400',
    fontSize: normalize(18),
    lineHeight: normalize(40),
    marginLeft: normalize(15),
  },
  tommyImage: {
    height: normalize(150),
    marginHorizontal: normalize(15),
  },
  bannerStripImage: {
    width: '95%',
    alignSelf: 'center',
    resizeMode: 'contain',
    height: normalize(40),
    marginVertical: normalize(5),
  },
  offerBannerImage: {
    width: '100%',
    alignSelf: 'center',
    resizeMode: 'contain',
    height: normalize(350),
    marginVertical: normalize(5),
  },
  bannerTitlesImage: {
    width: '100%',
    alignSelf: 'center',
    resizeMode: 'contain',
    height: normalize(160),
    marginVertical: normalize(5),
  },
  bannerCover: {
    width: '92%',
    alignSelf: 'center',
    resizeMode: 'cover',
    height: normalize(240),
    marginVertical: normalize(5),
  },
  viewAllButton: {
    alignSelf: 'center',
    width: normalize(80),
    height: normalize(25),
    borderRadius: normalize(5),
  },
});

/**
 * @exports
 */
export default React.memo(BannerFlatList);
