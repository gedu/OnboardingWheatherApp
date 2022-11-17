import React, { useEffect } from 'react';

import { Text, View } from 'react-native';

import { LocationWeaterItemInformation } from '@components/LocationWeatherInformation/LocationWeatherInformation';
import { Spacer } from '@components/Spacer';
import { RouteProp } from '@react-navigation/native';
import { HorizontalDivider } from 'src/components/Divider/HorizontalDivider';
import { MainParamList } from 'src/navigation/MainNavigation';
import { fireNotification } from 'src/services/DeviceNotification';

import { styles } from './DetailsScreen.style';
import { useStorage } from './useStorage';

type DetailsScreenProps = {
  route: RouteProp<MainParamList, 'DetailScreen'>;
};

type RowLocationDetailProps = {
  info: string;
  title: string;
};

const RowLocationDetail = ({ title, info }: RowLocationDetailProps) => {
  return (
    <View style={styles.rowDetailContainer}>
      <Text>{title}</Text>
      <Spacer flex={1} />
      <Text>{info}</Text>
    </View>
  );
};

export const DetailsScreen = ({ route }: DetailsScreenProps) => {
  const [locationData] = useStorage(route.params.id);

  useEffect(() => {
    fireNotification('Test', 'yay message');
  }, []);

  return (
    <>
      <LocationWeaterItemInformation
        iconUrl={locationData.weather.icon}
        name={locationData.name}
        weatherType={locationData.weather.main}
        temperature={locationData.main.temp}
      />
      <HorizontalDivider />
      <RowLocationDetail
        title="Humidity"
        info={`${locationData.main.humidity}%`}
      />
      <HorizontalDivider />
      <RowLocationDetail
        title="Pressure"
        info={`${locationData.main.pressure} hPa`}
      />
      <HorizontalDivider />
      <RowLocationDetail
        title="Wind Speed"
        info={`${locationData.wind.speed} mph`}
      />
      <HorizontalDivider />
      <RowLocationDetail
        title="Cloud Cover"
        info={`${locationData.clouds.all}%`}
      />
    </>
  );
};
