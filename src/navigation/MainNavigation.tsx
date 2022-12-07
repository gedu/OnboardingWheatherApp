import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { DetailsScreen } from 'src/screens/Details/DetailsScreen';
import { HomeScreen } from 'src/screens/Home/HomeScreen';

type MainParamList = {
  DetailScreen: { id: number };
  HomeScreen: undefined;
};

type MainRouteNames = keyof MainParamList;

type MainNavigationProps<S extends MainRouteNames> = NativeStackScreenProps<
  MainParamList,
  S
>;

type LogeStackRoutesProps = {
  initialScreen?: MainRouteNames;
};

const Stack = createNativeStackNavigator<MainParamList>();

const homeScreenOptions = {
  title: 'Weather',
};

const detailsScreenOptions = {
  title: 'Details',
};

export const MainNavigation = ({
  initialScreen = 'HomeScreen',
}: LogeStackRoutesProps) => (
  <Stack.Navigator initialRouteName={initialScreen}>
    <Stack.Screen
      name="HomeScreen"
      options={homeScreenOptions}
      component={HomeScreen}
    />
    <Stack.Screen
      name="DetailScreen"
      options={detailsScreenOptions}
      component={DetailsScreen}
    />
  </Stack.Navigator>
);

export type { MainNavigationProps, MainParamList };
