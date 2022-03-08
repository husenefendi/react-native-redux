import React from 'react';
import { Stack } from '~router';
import DashboardView from '~views/Dashboard';

const AuthRoutes = (): React.ReactElement => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={DashboardView} name="Dashboard" />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
