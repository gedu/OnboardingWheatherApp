import React from 'react';

import { FlatList, ListRenderItem } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { HorizontalDivider } from '../../components/Divider/HorizontalDivider';
import { LocationWeaterItemInformation } from '../../components/LocationWeatherInformation/LocationWeatherInformation';
import { LocationItem } from '../../utils/types';

import { mockItems } from './mockWheatherData';

export const HomeScreen = () => {
  const renderItem: ListRenderItem<LocationItem> = ({
    item: { name, temp, weather },
  }) => (
    <LocationWeaterItemInformation
      iconUrl={weather.icon}
      name={name}
      weatherType={weather.main}
      temperature={temp}
      withChevron
    />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={mockItems}
        renderItem={renderItem}
        ItemSeparatorComponent={HorizontalDivider}
      />
    </SafeAreaView>
  );
};
