import {Text, Image,  StyleSheet ,View, ScrollView} from 'react-native';
import { MEALS } from '../data/dummy-data';
import Subtitle from '../components/Subtitle';
import DetailList from '../components/DetailList';
import {useLayoutEffect, useContext} from 'react'
import IconButton from '../components/IconButton';
import { FavoirtesContext } from '../context/Favorite-context';

export default function MealDetailScreen({route, navigation}) {

  const FavoritesMealCtx = useContext(FavoirtesContext)

  const mealId = route.params.mealId;

  const mealItems = MEALS.find((meal) => meal.id === mealId);

  const MealIsFavorite = FavoritesMealCtx.ids.includes(mealId);

  function FavoriteMealsHandler(){
    if(MealIsFavorite){
      FavoritesMealCtx.removeFavorite(mealId)
    }else{
      FavoritesMealCtx.addFavorite(mealId)
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealItems.title,
      headerRight: () => {
        return (
            <IconButton
              icon={MealIsFavorite ? 'star': 'star-outline'}
              color='white'
              onPress={FavoriteMealsHandler}
              />)
        },
    });
  }, [navigation, FavoriteMealsHandler]);

    return (
      <ScrollView>
        <Image
        source={{uri: mealItems.imageUrl}}
        style={styles.image}
        />
          <View style={styles.infoContainer}>
            <Text style={styles.titleText}>{ mealItems.title }</Text>
            <View style={styles.textContainer}>
              <Text style={styles.text}>{ mealItems.duration }m</Text>
              <Text style={styles.text}>{ mealItems.complexity }</Text>
              <Text style={styles.text}>{ mealItems.affordability }</Text>
            </View>
            <View>
              <Subtitle>Ingredients</Subtitle>
              <DetailList data={mealItems.ingredients} />
            </View>
            <View>
              <Subtitle>Steps</Subtitle>
              <DetailList data={mealItems.steps} />
            </View>

          </View>
      </ScrollView>

      )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  infoContainer: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    paddingVertical: 8,
  },
  textContainer: {
    flexDirection: 'row',
  },
  text: {
    paddingHorizontal: 6,
    color: 'white',
  },
})
