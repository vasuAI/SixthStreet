import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Colors from '../../utils/Colors';
import {normalize} from '../../utils/Dimensions';
import LinearGradient from 'react-native-linear-gradient';

/**
 *
 * @param {*} props
 * @returns
 */
const StoryFlatlist = (props: any) => {
  const _renderItem = ({item}: any) => {
    return (
      <TouchableOpacity style={styles.story} activeOpacity={0.7}>
        <LinearGradient
          colors={[Colors.skin, Colors.orange]}
          style={styles.borderView}>
          <View style={styles.imageView}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={{uri: item.image_url}}
            />
          </View>
        </LinearGradient>
        <Text style={styles.labelText}>{item.label.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      horizontal
      bounces={false}
      data={props.data}
      renderItem={_renderItem}
      keyExtractor={item => item.label}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};

/**
 * @styles
 */
const styles = StyleSheet.create({
  flatListContainer: {
    marginTop: 8,
    height: normalize(104),
    paddingHorizontal: normalize(6),
  },
  borderView: {
    overflow: 'hidden',
    borderRadius: 1000,
    alignItems: 'center',
    width: normalize(70),
    height: normalize(70),
    justifyContent: 'center',
  },
  imageView: {
    borderWidth: 3,
    overflow: 'hidden',
    borderRadius: 1000,
    borderColor: 'white',
    width: normalize(66),
    height: normalize(66),
  },
  story: {
    width: normalize(70),
    height: normalize(90),
    marginHorizontal: normalize(4.5),
  },
  image: {height: '100%', width: '100%'},
  labelText: {
    marginTop: 6,
    letterSpacing: 0.2,
    alignSelf: 'center',
    fontSize: normalize(7),
    lineHeight: normalize(12),
  },
});

/**
 * @exports
 */
export default React.memo(StoryFlatlist);
