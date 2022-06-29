import {FlatList} from 'react-native';
import React, {useCallback} from 'react';
import SliderBanner from '../SliderBanner';
import GridFlatList from '../gridFlatList';
import ItemSeperator from '../ItemSeperator';
import StoryFlatList from '../StoryFlatlist';
import BannerFlatList from '../bannerFlatList';
import FullWidthSlider from '../fullWidthSlider';
import BannerTypes from '../../utils/BannerTypes';

const HomeParentFlatlist = (props: any) => {
  const {
    data: {data},
  } = props;

  const onRenderFlatlist = useCallback(({item}: any): any => {
    const {type, items, header, tag, title} = item;

    switch (type) {
      case BannerTypes.circleSlider:
        return <StoryFlatList data={items} />;
      case BannerTypes.banner:
        return <BannerFlatList data={items} header={header} tag={tag} />;
      case BannerTypes.grid:
        return <GridFlatList data={item} header={header} />;
      case BannerTypes.bannerSlider:
        // eslint-disable-next-line no-lone-blocks
        {
          <SliderBanner data={item} title={title ?? 'NA'} tag={tag} />;
        }
        break;
      case BannerTypes.lineSeperator:
        return <ItemSeperator />;
      case BannerTypes.fullBannerSlider:
        return <FullWidthSlider data={items} />;
      default:
    }
  }, []);
  return (
    <FlatList
      data={data}
      bounces={false}
      renderItem={onRenderFlatlist}
      keyExtractor={item => JSON.stringify(item?.index)}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  );
};
/**
 * @exports
 */
export default React.memo(HomeParentFlatlist);
