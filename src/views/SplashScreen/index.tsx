import React, { ReactNode } from 'react';
import { StatusBar, View } from 'react-native';
import LogoComponent from '~components/Logo';

import styles from './style';

const SplashScreenView = (): ReactNode => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
        <LogoComponent zoom={2} />
      </View>
    </>
  );
};

export default SplashScreenView;
