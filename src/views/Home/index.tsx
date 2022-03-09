import React from 'react';
import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import useTailwind from '~app/hooks/tailwind';
import { homeViewProps } from '~type/RootStackPrams';

const HomeView = ({ navigation }: homeViewProps) => {
  const tw = useTailwind();

  return (
    <View style={tw`container flex-1 px-5 bg-purple-10`}>
      <ImageBackground
        source={require('~assets/bg/main-bg.png')}
        resizeMode="cover"
        style={tw`flex-auto justify-center w-full bg-center`}>
        <View style={tw`bg-slate-100 rounded-xl p-8 dark:bg-slate-800`}>
          <Text style={tw`text-center font-bold text-lg mb-5`}>
            Get Started
          </Text>
          <TouchableOpacity style={tw`w-full bg-primary-purple rounded p-3`}>
            <Text style={tw`text-center text-white`}>Continue With SSHUB</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeView;
