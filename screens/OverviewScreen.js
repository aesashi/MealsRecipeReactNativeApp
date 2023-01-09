import { MEALS, CATEGORIES } from '../data/dummy-data';
import { View, Text, FlatList } from 'react-native';
import MealItem from '../components/MealItem';
import {useLayoutEffect} from 'react'
export default function OverviewScreen({navigation, route}) {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {

  navigation.setOptions({
      title: route.params.itemCategory,
    });

  }, [catId, navigation])

  function renderMealItem(itemData){
    const item = itemData.item
    return (
      <MealItem
      id={item.id}
      title={item.title}
      imageUrl={item.imageUrl}
      affordability={item.affordability}
      duration={item.duration}
      complexity={item.complexity}
    />
    )
  }
  return (
    <FlatList
    data={displayedMeals}
    renderItem={renderMealItem}
    />
  )
}
