import React, {useState} from 'react';
import {Colors} from '../../../utils';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Men, Women, Kids} from '../../categoryTabNaviagtion/';
import {CategoryHeader, CategoryTopNav} from '../../../components';

const Categories = () => {
  const [cardSelected, setCardSelected] = useState('Women');

  const selectedTab = () => {
    if (cardSelected === 'Men') {
      return <Men />;
    } else if (cardSelected === 'Women') {
      return <Women />;
    } else if (cardSelected === 'Kid') {
      return <Kids />;
    }
  };

  return (
    <SafeAreaView style={styles.contentContainer}>
      <CategoryTopNav cardPress={cardSelected} setCardPress={setCardSelected} />
      <CategoryHeader />
      {selectedTab()}
    </SafeAreaView>
  );
};

/**
 * @styles
 */
const styles = StyleSheet.create({
  contentContainer: {flex: 1, backgroundColor: Colors.white},
});

/**
 * @exports
 */
export default React.memo(Categories);
