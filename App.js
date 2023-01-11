import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import  OverviewScreen  from './screens/OverviewScreen';

import { NavigationContainer } from '@react-navigation/native';
import MealDetailScreen from './screens/MealDetailScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const  Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavs() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#351401'
        },
          headerTintColor: 'white',
          contentStyle: {backgroundColor: '#3f2f25'}
      }}>
        <Stack.Screen name="Drawer" component={DrawerNavs} />
        <Stack.Screen name="Overview" component={OverviewScreen} />
        <Stack.Screen name="Detail" component={MealDetailScreen} />

      </Stack.Navigator>
    </NavigationContainer>
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
