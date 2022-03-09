import React from 'react';
import { Button, Text, View } from 'react-native';
import tw from 'twrnc';

import { homeViewProps } from '~type/RootStackPrams';

const HomeView = ({ navigation }: homeViewProps) => {
  return (
    <View style={tw`flex justify-center p-5 h-full`}>
      <Text style={tw`text-sky-500 dark:text-sky-400 text-center`}>
        Home View
      </Text>
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
