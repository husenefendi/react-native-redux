import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import delay from '~app/hooks/delay';

import GlobalRoutes from './GlobalRoutes';
import AuthRoutes from './AuthRoutes';
import SplashScreenView from '~views/SplashScreen';

export const Stack = createNativeStackNavigator();

const MainRoute = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isLogin, setLogin] = useState<boolean>(false);
  const handleLoading = async () => {
    await delay(1500);
    setLoading(false);
  };

  const SwhitchRoutes = (): React.ReactElement => {
    return isLogin ? <AuthRoutes /> : <GlobalRoutes />;
  };

  useEffect(() => {
    handleLoading();
  }, []);

  return isLoading ? <SplashScreenView /> : <SwhitchRoutes />;
};

export default MainRoute;
