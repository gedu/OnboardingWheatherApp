import React from 'react';

import { FlatList, ListRenderItem } from 'react-native';

import { HorizontalDivider } from '@components/Divider/HorizontalDivider';
import { ErrorIndicator } from '@components/ErrorIndicator/ErrorIndicator';
import { LoadingIndicator } from '@components/LoadingIndicator';
import { LocationWeaterItemInformation } from '@components/LocationWeatherInformation/LocationWeatherInformation';
import { NavigationProp } from '@react-navigation/native';
import { useLocationWeather } from '@services/remote-data-source/useLocationWeather';
import { MainParamList } from 'src/navigation/MainNavigation';
import { LocationItem } from 'src/utils/types';

type HomeScreenProps = {
  navigation: NavigationProp<MainParamList>;
};

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { data, isLoading, error } = useLocationWeather();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  const renderItem: ListRenderItem<LocationItem> = ({
    item: { id, name, main: temperature, weather },
  }) => {
    const handleSelection = () => {
      navigation.navigate('DetailScreen', { id });
    };

    return (
      <LocationWeaterItemInformation
        iconUrl={weather.icon}
        name={name}
        weatherType={weather.main}
        temperature={temperature.temp}
        onPress={handleSelection}
        withChevron
      />
    );
  };

  return (
    <FlatList
      testID="location-list"
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={HorizontalDivider}
    />
  );
};
