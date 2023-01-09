import { CATEGORIES } from '../data/dummy-data';
import { View, Text, FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

export default function CategoriesScreen({navigation}) {

  function renderCategoryItem(itemData){
    function moveToOverview(){
      navigation.navigate('Overview', {
        categoryId: itemData.item.id,
        itemCategory: itemData.item.title,
      });
    }
    return <CategoryGridTile
              title={itemData.item.title}
              id={itemData.item.id}
              color={itemData.item.color}
              onPress={moveToOverview}
            />
  }
  return (

    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  )
}
