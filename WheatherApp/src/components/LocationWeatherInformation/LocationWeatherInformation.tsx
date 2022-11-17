import React from 'react';

import { Image, Text, View } from 'react-native';

import { icons } from '../../../assets/icons';
import { buildIconUrl } from '../../screens/Home/mockWheatherData';
import { Spacer } from '../Spacer';

import { styles } from './LocationWeatherInformation.style';

type WheaterItemInformationProps = {
  iconUrl: string;
  name: string;
  temperature: number;
  weatherType: string;
  withChevron?: boolean;
};

type TemperaturePillProps = {
  temperature: number;
};

const TemperaturePill = ({ temperature }: TemperaturePillProps) => {
  return (
    <View style={styles.locationWeatherTempPill}>
      <Text style={styles.locationWeatherTempText}>{temperature} F</Text>
    </View>
  );
};

export const LocationWeaterItemInformation = ({
  iconUrl,
  name,
  weatherType,
  temperature,
  withChevron = false,
}: WheaterItemInformationProps) => {
  return (
    <View style={styles.locationItemRoot}>
      <Image
        style={styles.locationIcon}
        source={{ uri: buildIconUrl(iconUrl) }}
      />
      <Spacer horizontal="16" />
      <View style={styles.locationInfoContainer}>
        <Text style={styles.locationText}>{name}</Text>
        <Text>{weatherType}</Text>
      </View>
      <TemperaturePill temperature={temperature} />
      <Spacer horizontal="8" />
      {withChevron ? <Image source={icons.rightChevron} /> : null}
      <Spacer horizontal="16" />
    </View>
  );
};
