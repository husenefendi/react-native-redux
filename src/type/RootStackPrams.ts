import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  ExamplePage: undefined;
  ExamplePost: undefined;
};

export type homeViewProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export type ExamplePageViewProps = NativeStackScreenProps<
  RootStackParamList,
  'ExamplePage'
>;

export type ExamplePostViewProps = NativeStackScreenProps<
  RootStackParamList,
  'ExamplePost'
>;
