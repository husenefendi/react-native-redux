import React from 'react';
import { Button, Text, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';

import { homeViewProps } from '../../type/RootStackPrams';

const HomeView = (props: homeViewProps) => {
  const { navigation } = props;
  const tailwind = useTailwind();
  console.log({ props, tailwind: tailwind('text-blue-600') });
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home View</Text>
      <Button
        title="Move to Example Page"
        onPress={() => navigation.navigate('ExamplePage')}
      />
      <Button
        title="Go to Example Post"
        onPress={() => navigation.navigate('ExamplePost')}
      />
    </View>
  );
};

export default HomeView;
