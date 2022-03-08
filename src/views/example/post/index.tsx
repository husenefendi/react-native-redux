import React from 'react';
import { Text, View } from 'react-native';

import { ExamplePostViewProps } from '~type/RootStackPrams';

const ExamplePostView = (props: ExamplePostViewProps) => {
  console.log({ props });

  return (
    <View>
      <Text>Example Post View</Text>
    </View>
  );
};

export default ExamplePostView;
