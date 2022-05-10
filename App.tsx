import React from 'react';
import StoryOverview from './src/screens/StoryOverview';
import AuthorProfile from './src/screens/AuthorProfile';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import store from './src/store/index';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="StoryOverview"
            component={StoryOverview}
            options={{title: 'Top Stories - 10 Randomized'}}
          />

          <Stack.Screen
            name="AuthorProfile"
            component={AuthorProfile}
            options={{title: 'User Profile'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
