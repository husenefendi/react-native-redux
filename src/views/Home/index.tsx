import React from 'react';
import { Button, Text, View } from 'react-native';

import { homeViewProps } from '../../type/RootStackPrams';

const HomeView = ({ navigation }: homeViewProps) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home View</Text>
      <Button
        title="Move to Example Page"
        onPress={() => navigation.navigate('ExamplePage')}
      />
    </View>
  );
};

export default HomeView;
