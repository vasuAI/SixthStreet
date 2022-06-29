import React from 'react';
import Colors from '../../utils/Colors';
import {normalize} from '../../utils/Dimensions';
import LocalImages from '../../utils/LocalImages';
import {StyleSheet, Text, Image, View} from 'react-native';
import CustomInput from '../../components/customSearch/customSearch';

/**
 * @returns
 */
const CategoryHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.textInputView}>
        <Image style={styles.iconStyle} source={LocalImages.searchIcon} />
        <CustomInput
          placeholder={'Search...'}
          inputStyle={styles.textInputStyle}
          placeholderTextColor="grey"
        />
      </View>
      <View style={styles.categoryBrandView}>
        <View style={styles.categoryView}>
          <Image style={styles.categoryImage} source={LocalImages.bagIcon} />
          <Text style={styles.categoryText}>{'Categories'}</Text>
        </View>
        <View style={styles.brandTextView}>
          <Image style={styles.brandImage} source={LocalImages.bellIcon} />
          <Text style={styles.brandsText}>{'Brands'}</Text>
        </View>
      </View>
    </View>
  );
};

/**
 * @exports
 */
const styles = StyleSheet.create({
  textInputStyle: {
    width: '60%',
    height: normalize(35),
    marginLeft: normalize(7),
  },
  iconStyle: {
    opacity: 0.5,
    width: normalize(17),
    height: normalize(17),
    marginLeft: normalize(10),
  },
  textInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: normalize(110),
    height: normalize(35),
    borderRadius: normalize(10),
    backgroundColor: Colors.grey,
  },
  headerContainer: {
    flexDirection: 'row',
    padding: normalize(10),
    marginLeft: normalize(7),
    justifyContent: 'space-between',
  },
  categoryView: {
    alignItems: 'center',
    flexDirection: 'row',
    width: normalize(110),
    height: normalize(27),
    borderRadius: normalize(20),
    backgroundColor: Colors.black,
    justifyContent: 'space-around',
  },
  categoryBrandView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: normalize(190),
    justifyContent: 'space-around',
    marginHorizontal: normalize(10),
  },
  brandTextView: {
    alignItems: 'center',
    flexDirection: 'row',
    width: normalize(70),
    height: normalize(27),
    borderRadius: normalize(20),
    backgroundColor: Colors.grey,
    justifyContent: 'space-around',
    paddingHorizontal: normalize(4),
  },
  categoryText: {
    fontWeight: 'bold',
    color: Colors.white,
    marginRight: normalize(7),
  },
  categoryImage: {
    tintColor: 'white',
    width: normalize(20),
    height: normalize(20),
    marginLeft: normalize(5),
  },

  brandsText: {
    fontWeight: '500',
    color: Colors.black,
    fontSize: normalize(13),
  },
  brandImage: {
    width: normalize(15),
    height: normalize(15),
  },
});

/**
 * @exports
 */
export default React.memo(CategoryHeader);
