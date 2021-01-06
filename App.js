import React from 'react';
import {View} from 'react-native';

//Navigator
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';

//Components
import Home from './src/modules/Screens/TabScreen/Home';
import Activities from './src/modules/Screens/TabScreen/Activities';
import Payments from './src/modules/Screens/TabScreen/Payments';
import Messages from './src/modules/Screens/TabScreen/Messages';
import Account from './src/modules/Screens/TabScreen/Account';
import {Color, IconSize} from './src/configs/colors';

//Icon
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MotorBikeScreen from './src/modules/Screens/StackScreen/MenuIcon/motorBike';

const Stack = createNativeStackNavigator();

const Tab = createMaterialTopTabNavigator();

const options = {
  homeOptions: {
    tabBarIcon: ({color}) => {
      return <Entypo name="home" size={IconSize.medium} color={color} />;
    },
    tabBarLabel: 'Trang chủ',
  },
  activitiesOptions: {
    tabBarIcon: ({color}) => {
      return (
        <FontAwesome5
          name="clipboard-list"
          size={IconSize.medium}
          color={color}
        />
      );
    },
    tabBarLabel: 'Hoạt động',
  },
  paymentsOptions: {
    tabBarIcon: ({color}) => {
      return <Entypo name="wallet" size={IconSize.medium} color={color} />;
    },
    tabBarLabel: 'Thanh toán',
  },
  messagesOptions: {
    tabBarIcon: ({color}) => {
      return <Fontisto name="messenger" size={IconSize.medium} color={color} />;
    },
    tabBarLabel: 'Tin nhắn',
  },
  accountOptions: {
    tabBarIcon: ({color}) => {
      return <FontAwesome name="user" size={IconSize.medium} color={color} />;
    },
    tabBarLabel: 'Tài khoản',
  },
};
function MainTab() {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      keyboardDismissMode="auto"
      tabBarOptions={{
        activeTintColor: Color.green,
        inactiveTintColor: Color.gray,
        labelStyle: {fontSize: 10, textTransform: 'none'},
        tabStyle: {padding: 0},
        style: {backgroundColor: Color.white},
        showIcon: true,
        pressColor: Color.green,
        indicatorStyle: {top: 0},
      }}>
      <Tab.Screen name="Home" component={Home} options={options.homeOptions} />
      <Tab.Screen
        name="Activities"
        component={Activities}
        options={options.activitiesOptions}
      />
      <Tab.Screen
        name="Payments"
        component={Payments}
        options={options.paymentsOptions}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={options.messagesOptions}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={options.accountOptions}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeTab"
          component={MainTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MotorScreen"
          component={MotorBikeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
