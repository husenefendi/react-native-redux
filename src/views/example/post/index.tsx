import React from 'react';
import { Text, View } from 'react-native';
import { Box } from 'native-base';

import { ExamplePostViewProps } from '~type/RootStackPrams';

const ExamplePostView = (props: ExamplePostViewProps) => {
  console.log({ props });

  return (
    <Box>
      <Text>Example Post View</Text>
    </Box>
  );
};

export default ExamplePostView;
