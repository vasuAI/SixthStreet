import {FlatList} from 'react-native';
import React, {useCallback} from 'react';
import SliderBanner from '../SliderBanner';
import GridFlatList from '../GridFlatList';
import ItemSeperator from '../ItemSeperator';
import StoryFlatList from '../StoryFlatlist';
import BannerFlatList from '../BannerFlatList';
import FullWidthSlider from '../FullWidthSlider';
import BannerTypes from '../../utils/BannerTypes';

const HomeParentFlatlist = (props: any) => {
  const {
    data: {data},
  } = props;

  const onRenderFlatlist = useCallback(
    ({item}: any): any => {
      const {type, items, header, tag, title, index} = item;

      switch (type) {
        case BannerTypes.circleSlider:
          return <StoryFlatList data={items} />;
        case BannerTypes.banner:
          return <BannerFlatList data={items} header={header} tag={tag} />;
        case BannerTypes.grid:
          return <GridFlatList data={item} header={header} />;
        case BannerTypes.bannerSlider: {
          <SliderBanner data={item} title={title ?? 'NA'} tag={tag} />;
        }
        case BannerTypes.lineSeperator:
          return <ItemSeperator />;
        case BannerTypes.fullBannerSlider:
          return <FullWidthSlider data={items} />;
        default:
      }
    },
    [data],
  );
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
null;
