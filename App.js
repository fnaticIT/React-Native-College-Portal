import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createStackNavigator();
import Icon from 'react-native-vector-icons/Entypo';
import Homenav from './screens/Homenav';
import Add from './screens/Add';
import Views from './screens/Views';
import display from './screens/Display';
import User from './screens/User';
import Myclubs from './screens/Myclubs';
import Myfollowers from './screens/Myfollowers';
import Friends from './screens/Friends';
import Imagez from './screens/Image';
import Splash from './screens/Splash';

const App = () => {
  const [isloggedin, setLogged] = useState(null);

  const detectLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  };
  useEffect(() => {
    detectLogin();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen name="loading" component={LoadingScreen} />
        <Stack.Screen
          name="start"
          component={Homenav}
          options={{
            headerShown: false,
            headerRight: () => (
              <Icon
                name={'dots-three-vertical'}
                size={25}
                color="black"
                style={{width: '11%'}}
              />
            ),
          }}
        />
        <Stack.Screen name="image" component={Imagez} />
        <Stack.Screen
          name="login"
          options={{headerShown: false}}
          component={LoginScreen}
        />
        <Stack.Screen
          name="register"
          component={SignupScreen}
          options={{
            headerShown: true,
            headerTitle: 'Register',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: 'rgba(223, 108, 138,0.5)',
            },
          }}
        />
        <Stack.Screen name="add" component={Add} />
        <Stack.Screen name="view" component={Views} />
        <Stack.Screen name="display" component={display} />
        <Stack.Screen name="user" component={User} />
        <Stack.Screen name="My Clubs" component={Myclubs} />
        <Stack.Screen name="My Followers" component={Myfollowers} />
        <Stack.Screen name="friends" component={Friends} />
        <Stack.Screen name="splash" component={Splash} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
