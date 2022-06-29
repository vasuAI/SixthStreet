import React from 'react';
import LocalImages from '../../utils/LocalImages';
import {normalize} from '../../utils/Dimensions';
import {Colors, Strings} from '../../utils';
import CustomSearch from '../customSearch/CustomSearch';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import TopNavigation from '../../modules/TopTabNaviagtion/TopTabNavigation';

const Header = () => {
  return (
    <>
      <View style={styles.container}>
        <Image source={LocalImages.headerLogo} style={styles.headerLogoStyle} />
        <TouchableOpacity style={styles.notificationIconConatiner}>
          <Image source={LocalImages.bellIcon} style={styles.iconStyle} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shoppingBagContainer}>
          <Image source={LocalImages.bagIcon} style={styles.iconStyle} />
        </TouchableOpacity>
      </View>
      <View style={styles.textInputView}>
        <Image
          style={styles.searchBarIconStyle}
          source={LocalImages.searchIcon}
        />
        <CustomSearch
          onChange={undefined}
          placeholder={Strings.searchtext}
          placeholderTextColor={Colors.black}
          inputStyle={styles.textInputStyle}
        />
        <Image
          style={styles.searchBarIconStyle}
          source={LocalImages.voiceIcon}
        />
      </View>
      <TopNavigation />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: normalize(50),
    justifyContent: 'center',
  },
  headerLogoStyle: {
    alignSelf: 'center',
    height: normalize(20),
    width: normalize(120),
  },
  iconStyleCon: {
    flexDirection: 'row',
  },
  notificationIconConatiner: {
    alignSelf: 'center',
    height: normalize(24),
    width: normalize(24),
    right: normalize(66),
    position: 'absolute',
  },
  iconStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  shoppingBagContainer: {
    alignSelf: 'center',
    width: normalize(24),
    position: 'absolute',
    right: normalize(20),
    height: normalize(24),
  },
  textInputStyle: {
    width: '80%',
    height: normalize(40),
    marginLeft: normalize(7),
  },
  searchBarIconStyle: {
    width: normalize(20),
    height: normalize(20),
    marginLeft: normalize(10),
  },
  textInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: normalize(35),
    borderRadius: normalize(10),
    backgroundColor: Colors.grey,
    marginHorizontal: normalize(20),
  },
});
export default React.memo(Header);
