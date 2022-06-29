import React from 'react';
import {normalize} from '../../utils/Dimensions';
import {StyleSheet, View, Image} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

/**
 *
 * @param {*} props
 * @returns
 */
const FullWidthSlider = (props: any) => {
  const {
    data: {data},
  } = props;

  const _renderItem = ({item}: any) => {
    return <Image source={{uri: item.url}} style={styles.cardImageStyle} />;
  };

  return (
    <View style={styles.mainContainer}>
      <SwiperFlatList
        data={data}
        autoplay={true}
        autoplayDelay={2}
        autoplayLoop={true}
        renderItem={_renderItem}
        keyExtractor={(item: any) => item?.tag}
      />
    </View>
  );
};

/**
 * @styles
 */
const styles = StyleSheet.create({
  cardImageStyle: {
    width: normalize(330),
    height: normalize(340),
    marginLeft: normalize(5),
  },
  mainContainer: {
    padding: 10,
  },
});

/**
 * @exports
 */
export default React.memo(FullWidthSlider);
