import React, {useState} from 'react';
import {Colors} from '../../../utils';
import {StyleSheet, SafeAreaView} from 'react-native';
import CategoryMen from '../../categoryTabNaviagtion/Men';
import CategoryKid from '../../categoryTabNaviagtion/Kids';
import CategoryWomen from '../../categoryTabNaviagtion/Women';
import CategoryTopHeader from '../../../components/CategoryTopNav';
import CategoryHeader from '../../../components/CategoryHeader';

const Categories = () => {
  const [cardPress, setCardPress] = useState('Women');

  const toDisplayScreen = () => {
    if (cardPress == 'Men') {
      return <CategoryMen />;
    } else if (cardPress == 'Women') {
      return <CategoryWomen />;
    } else if (cardPress == 'Kid') {
      return <CategoryKid />;
    }
  };

  return (
    <SafeAreaView style={styles.contentContainer}>
      <CategoryTopHeader cardPress={cardPress} setCardPress={setCardPress} />
      <CategoryHeader />
      {toDisplayScreen()}
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
