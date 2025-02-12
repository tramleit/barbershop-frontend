import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from '../bottomTabs';
import Login from '../../screens/login';
import {RootState, useAppSelector} from '../../store';
import Loading from '../../screens/loading';
import UserNavigator from '../userNavigator';
import UserLoading from '../../screens/userloading';
import WelcomeOnboarding from '../../screens/Onboarding';
import { useSocket } from '../../context/socketContext';

const Stack = createNativeStackNavigator();

export default function MainNavigator(): JSX.Element {
  const {user, token} = useAppSelector((state: RootState) => state.auth);
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <>
        {user ? (
          user.role === 'barber' || user.role === 'admin-barber' || user.role === 'admin' ? (
            <>
              <Stack.Screen name="Loading" component={Loading} />
              <Stack.Screen name="BottomsTabs" component={BottomTabs} />
            </>
          ) : (
            <>
              <Stack.Screen name="UserLoading" component={UserLoading} />
              <Stack.Screen name="WelcomeOnboarding" component={WelcomeOnboarding}/>
              <Stack.Screen name="UserRoutes" component={UserNavigator} />
            </>
          )
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
          </>
        )}
      </>
    </Stack.Navigator>
  );
}
