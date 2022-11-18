import React from 'react';

import { Image, Pressable, Text, View } from 'react-native';

import { icons } from '@assets/icons';
import { Spacer } from '@components/Spacer';
import { buildIconUrl } from '@services/utils/weatherIcons';

import { styles } from './LocationWeatherInformation.style';

type WheaterItemInformationProps = {
  iconUrl: string;
  name: string;
  onPress?: () => void;
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
  onPress = () => {},
  withChevron = false,
}: WheaterItemInformationProps) => {
  return (
    <Pressable style={styles.locationItemRoot} onPress={onPress}>
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
    </Pressable>
  );
};
