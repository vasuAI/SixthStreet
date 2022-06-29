import React from 'react';
import {normalize} from '../../utils/Dimensions';
import {FlatList, View, Image, Text, StyleSheet} from 'react-native';

/**
 *
 * @param {*} props
 * @returns
 */
const SliderBanner = (props: any) => {
  console.log('SliderBanner', props);
  const {data, title, tag} = props;

  const onRenderSlider = ({item}: any) => {
    return (
      <View style={styles.renderContainer}>
        <Image
          style={
            tag == 'Shop By Shoe Size-May-Slider' ||
            tag == 'Shop by Clothing size-Slider'
              ? styles.renderImageStyleOne
              : styles.renderImageStyleTwo
          }
          source={{uri: item.url}}
        />
        <Text style={styles.renderTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.contentContainer}>
      {title ? (
        <Text style={styles.titleStyle}>{title.toUpperCase()} </Text>
      ) : null}
      <FlatList
        horizontal
        data={data}
        bounces={false}
        renderItem={onRenderSlider}
        keyExtractor={item => item.tag}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

/**
 * @styles
 */
const styles = StyleSheet.create({
  contentContainer: {
    marginLeft: 15,
    marginBottom: 8,
  },
  titleStyle: {
    fontWeight: '400',
    fontSize: normalize(18),
    letterSpacing: normalize(1),
    marginVertical: normalize(10),
  },
  renderContainer: {
    marginRight: 15,
  },
  renderImageStyleOne: {
    height: normalize(90),
    width: normalize(130),
  },
  renderImageStyleTwo: {
    width: normalize(126),
    height: normalize(180),
  },
  renderTextStyle: {
    fontWeight: '300',
    alignSelf: 'center',
    marginTop: normalize(5),
  },
});
/**
 * @exports
 */
export default React.memo(SliderBanner);
