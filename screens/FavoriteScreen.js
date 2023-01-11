import { Text, View, FlatList } from "react-native"
import { useContext } from "react"
import { FavoirtesContext } from "../context/Favorite-context"
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
export default function FavoriteScreen() {
  const favoriteMealCtx = useContext(FavoirtesContext);

  const favoriteMeals = MEALS.filter( (meal) =>
      favoriteMealCtx.ids.includes(meal.id)
    )
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
    if(favoriteMeals.length === 0){
      return (
        <View>
          <Text>There is no favorites</Text>
        </View>
      )
    }else{
        return (
          <FlatList
          data={favoriteMeals}
          renderItem={renderMealItem}
          />
          )
    }
}
