import React from 'react';
import Colors from '../../utils/Colors';
import {normalize} from '../../utils/Dimensions';
import LocalImages from '../../utils/LocalImages';
import {StyleSheet, Text, Image, View} from 'react-native';
import CustomInput from '../customSearch/customSearch';

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
      <View style={styles.brandIconCointainer}>
        <View style={styles.categoryLabelView}>
          <Image style={styles.categoryImage} source={LocalImages.bagIcon} />
          <Text style={styles.categoryText}>{'Categories'}</Text>
        </View>
        <View style={styles.brandTextView}>
          <Image style={styles.brandImage} source={LocalImages.brandIcon} />
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
    height: normalize(37),
    marginLeft: normalize(5),
  },
  iconStyle: {
    opacity: 0.5,
    width: normalize(18),
    height: normalize(18),
    marginLeft: normalize(8),
  },
  textInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: normalize(100),
    height: normalize(35),
    borderRadius: normalize(10),
    backgroundColor: Colors.grey,
  },
  headerContainer: {
    flexDirection: 'row',
    padding: normalize(8),
    marginLeft: normalize(8),
    justifyContent: 'space-between',
  },
  categoryLabelView: {
    alignItems: 'center',
    flexDirection: 'row',
    width: normalize(120),
    height: normalize(28),
    borderRadius: normalize(20),
    backgroundColor: Colors.black,
    justifyContent: 'space-around',
  },
  brandIconCointainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'flex-start',
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
