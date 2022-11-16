import React from 'react';

import { View } from 'react-native';

const spacingValue = {
  ['0']: 0,
  ['4']: 4,
  ['8']: 8,
  ['16']: 16,
};

type Spacings = keyof typeof spacingValue;

type SpacerProps = {
  flex?: number;
  horizontal?: Spacings;
  vertical?: Spacings;
};

export const Spacer = ({
  flex,
  vertical = '0',
  horizontal = '0',
}: SpacerProps) => {
  return (
    <View
      style={{
        flex: flex,
        height: spacingValue[vertical],
        width: spacingValue[horizontal],
      }}
    />
  );
};
