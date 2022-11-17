import React from 'react';

import { FlatList, ListRenderItem } from 'react-native';

import { HorizontalDivider } from '@components/Divider/HorizontalDivider';
import { ErrorIndicator } from '@components/ErrorIndicator/ErrorIndicator';
import { LoadingIndicator } from '@components/LoadingIndicator';
import { LocationWeaterItemInformation } from '@components/LocationWeatherInformation/LocationWeatherInformation';
import { useLocationWeather } from '@services/remote-data-source/useLocationWeather';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LocationItem } from 'src/utils/types';

export const HomeScreen = () => {
  const { data, isLoading, error } = useLocationWeather();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

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
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={HorizontalDivider}
      />
    </SafeAreaView>
  );
};
