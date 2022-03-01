import React from 'react';
import { Text, View } from 'react-native';

import { ExamplePageViewProps } from '../../../type/RootStackPrams';

const ExamplePageView = (_props: ExamplePageViewProps) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Example Page View</Text>
    </View>
  );
};

export default ExamplePageView;
