import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  AddTrushName,
  CategoryName,
  FilterName,
  GoodsDataName,
  GoodsImgName,
  HomeScreenName,
  MapsScreenName,
  ReviewName,
  SearchName,
  ShopName,
  SubCategoryName,
} from '../constants';
import {
  AddTrushScreen,
  CategoryScreen,
  FilterScreen,
  GoodsDataScreen,
  GoodsImgScreen,
  HomeScreen,
  MapsScreen,
  ReviewScreen,
  ShopScreen,
  SubCategoryScreen,
  SearchScreen,
} from '../screens';

const Stack = createStackNavigator();

function HomeNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={HomeScreenName} component={HomeScreen} />
      <Stack.Screen name={FilterName} component={FilterScreen} />
      <Stack.Screen name={CategoryName} component={CategoryScreen} />
      <Stack.Screen name={SubCategoryName} component={SubCategoryScreen} />
      <Stack.Screen name={GoodsDataName} component={GoodsDataScreen} />
      <Stack.Screen name={GoodsImgName} component={GoodsImgScreen} />
      <Stack.Screen name={MapsScreenName} component={MapsScreen} />
      <Stack.Screen name={AddTrushName} component={AddTrushScreen} />
      <Stack.Screen name={ShopName} component={ShopScreen} />
      <Stack.Screen name={ReviewName} component={ReviewScreen} />
      <Stack.Screen name={SearchName} component={SearchScreen} />
    </Stack.Navigator>
  );
}

export default HomeNavigation;
