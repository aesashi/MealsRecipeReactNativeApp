import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import  OverviewScreen  from './screens/OverviewScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import MealDetailScreen from './screens/MealDetailScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Ionicons } from '@expo/vector-icons';
import FavoriteContextProvider from './context/Favorite-context';

const  Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavs() {
  return (
    <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          sceneContainerStyle: { backgroundColor: '#3f2f25' },
          drawerContentStyle: { backgroundColor: '#351401' },
          drawerInactiveTintColor: 'white',
          drawerActiveTintColor: '#351401',
          drawerActiveBackgroundColor: '#e4baa1',
        }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All categories',
          drawerIcon: ({color, size}) => (
            <Ionicons name='list' color={color} size={size} />
          )
        }}
       />
      <Drawer.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          title: 'Favorites',
          drawerIcon: ({color, size}) => (
            <Ionicons name='star' color={'white'} size={size} />
          )
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
    <StatusBar style='light' />
      <FavoriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#351401'
              },
                headerTintColor: 'white',
                contentStyle: {backgroundColor: '#3f2f25'}

          }}>
            <Stack.Screen
              name="Drawer"
              component={DrawerNavs}
              options={{
                title: 'All Categories',
                headerShown: false,
              }}
            />
            <Stack.Screen name="Overview" component={OverviewScreen} />
            <Stack.Screen name="Detail" component={MealDetailScreen} />

          </Stack.Navigator>
        </NavigationContainer>
      </FavoriteContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
