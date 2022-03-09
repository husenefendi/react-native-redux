import React from 'react';

import { Stack } from '~router';
import ExamplePageView from '~views/example/page';
import ExamplePostView from '~views/example/post';
import HomeView from '~views/Home';

const GlobalRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={HomeView}
        name="Home"
        options={{ headerShown: false }}
      />
      <Stack.Screen component={ExamplePageView} name="ExamplePage" />
      <Stack.Screen component={ExamplePostView} name="ExamplePost" />
    </Stack.Navigator>
  );
};

export default GlobalRoutes;
