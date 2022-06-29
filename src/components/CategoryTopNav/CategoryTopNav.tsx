import {
  Text,
  View,
  Image,
  FlatList,
  Animated,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../utils/Colors';
import LocalImages from '../../utils/LocalImages';
import React, {useCallback, useState} from 'react';
import {normalize, vh, vw} from '../../utils/Dimensions';

const CustomTopHeader = ({setCardPress}: any) => {
  const selectedTab = useState(new Animated.ValueXY({x: 15, y: 0}))[0];
  const data = ['Women', 'Men', 'Kid'];
  const onTagPress = (item: any) => {
    setCardPress(item);

    /**
     * @description animation bar on select a tab
     */
    switch (item) {
      case 'Men':
        Animated.timing(selectedTab, {
          toValue: {x: 90, y: 0},
          duration: 200,
          useNativeDriver: false,
        }).start();
        break;
      case 'Kid':
        Animated.timing(selectedTab, {
          toValue: {x: 160, y: 0},
          duration: 200,
          useNativeDriver: false,
        }).start();
        break;
      case 'Women':
        Animated.timing(selectedTab, {
          toValue: {x: 15, y: 0},
          duration: 200,
          useNativeDriver: false,
        }).start();
        break;
      default:
        break;
    }
  };
  const onRender = useCallback(({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onTagPress(item);
        }}
        style={[styles.tabBarItems]}>
        <Text style={styles.tagTextStyle}>{item}</Text>
      </TouchableOpacity>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.tabBarContainer}>
      <FlatList
        horizontal
        data={data}
        renderItem={onRender}
        keyExtractor={item => item}
        showsHorizontalScrollIndicator={false}
      />
      <Animated.View
        style={[styles.tabBarItemsActiveStyle, {left: selectedTab.x}]}
      />
      <Image source={LocalImages.bagIcon} style={styles.bagIconStyle} />
    </View>
  );
};

/**
 * @styles
 */
const styles = StyleSheet.create({
  tabBarContainer: {
    height: normalize(50),
    paddingHorizontal: normalize(20),
    borderBottomWidth: normalize(1),
    borderBottomColor: Colors.grey,
  },
  tabBarItems: {
    marginBottom: 10,
    alignItems: 'center',
    marginHorizontal: 16,
    justifyContent: 'center',
  },
  tabBarItemsActiveStyle: {
    left: 15,
    width: vw(60),
    postion: 'absoulte',
    borderBottomWidth: 2,
    borderBottomColor: Colors.black,
  },
  bagIconStyle: {
    width: vw(24),
    height: vh(26),
    top: normalize(10),
    position: 'absolute',
    right: normalize(20),
  },
  tagTextStyle: {
    fontSize: normalize(16),
  },
});

/**
 * @exports
 */
export default React.memo(CustomTopHeader);
