
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomBottomTab from './components/CustomBottomTab';
import Home from './pages/Home';
import SelectAdress from './pages/SelectAdress';
import Chat from './pages/Chat';
import MyPage from './pages/MyPage';
import Splash from './pages/Splash';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const renderTabBar = (props) => <CustomBottomTab {...props} />;

const MainTab = () => {
  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="SelectAdress" component={SelectAdress} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="MyPage" component={MyPage} />
    </Tab.Navigator>
  );
};

const Router = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="MainTab" component={MainTab} />
            {/* <Stack.Screen name="MyPlace" component={MyPlace} /> */}
        </Stack.Navigator>
    )
}



export default Router;